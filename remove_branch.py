#!/usr/bin/env python3
with open('public\\index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Remove lines 213-233 (1-indexed) = indices 212-232 (0-indexed)
new_lines = []
skip = False
for i, line in enumerate(lines):
    if i >= 212 and i <= 232:
        skip = True
        continue
    new_lines.append(line)

with open('public\\index.html', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print('Removed lines 213-233')