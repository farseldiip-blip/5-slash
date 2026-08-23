#!/usr/bin/env python3
with open('public\\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Add id="locations" to the location section's outer div
# The outer div has class "max-w-2xl mx-auto bg-background border-t..."
content = content.replace(
    'class="max-w-2xl mx-auto bg-background border-t border-on-background/10 border-b border-on-background/10 py-12"',
    'class="max-w-2xl mx-auto bg-background border-t border-on-background/10 border-b border-on-background/10 py-12" id="locations"'
)

with open('public\\index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Added id="locations" to location section')