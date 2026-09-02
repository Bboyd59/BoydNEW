#!/usr/bin/env bash
# Slice the single-shot master into 5 seam-locked scrub clips + posters.
set -euo pipefail

MASTER=$1
OUT=$2
mkdir -p "$OUT"

FRAMES=$(ffprobe -v error -select_streams v:0 -count_frames \
  -show_entries stream=nb_read_frames -of default=nk=1:nw=1 "$MASTER")
N=5
BASE=$((FRAMES / N))
echo "total frames: $FRAMES, per slice: $BASE"

for i in 0 1 2 3 4; do
  A=$((i * BASE))
  if [ "$i" -eq 4 ]; then B=$FRAMES; else B=$(((i + 1) * BASE)); fi
  idx=$(printf "%02d" $((i + 1)))

  ffmpeg -v error -y -i "$MASTER" -an \
    -vf "trim=start_frame=${A}:end_frame=${B},setpts=PTS-STARTPTS,unsharp=5:5:0.8:5:5:0.0" \
    -c:v libx264 -preset slow -crf 20 -pix_fmt yuv420p \
    -g 8 -keyint_min 8 -sc_threshold 0 -movflags +faststart \
    "$OUT/scan-${idx}.mp4"

  ffmpeg -v error -y -i "$MASTER" -an \
    -vf "trim=start_frame=${A}:end_frame=${B},setpts=PTS-STARTPTS,scale=-2:'min(720,ih)',unsharp=5:5:0.6:5:5:0.0" \
    -c:v libx264 -preset slow -crf 23 -pix_fmt yuv420p \
    -g 4 -keyint_min 4 -sc_threshold 0 -movflags +faststart \
    "$OUT/scan-${idx}-mobile.mp4"

  ffmpeg -v error -y -ss 0 -i "$OUT/scan-${idx}.mp4" -frames:v 1 -q:v 3 \
    "$OUT/scan-${idx}-poster.jpg"
  ffmpeg -v error -y -ss 0 -i "$OUT/scan-${idx}-mobile.mp4" -frames:v 1 -q:v 3 \
    "$OUT/scan-${idx}-mobile-poster.jpg"
done

echo "--- sizes ---"
du -ch "$OUT"/scan-*.mp4 | tail -1
du -ch "$OUT"/scan-*-mobile.mp4 | tail -1
ls -la "$OUT"
