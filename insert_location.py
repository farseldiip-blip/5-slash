#!/usr/bin/env python3
with open('public\\index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Insert location section after line 109 (0-indexed: 108, which is </section> for MANIFESTO Desktop)
# Insert after line index 109 (1-indexed) = index 109 (0-indexed) is the blank line after </section>
# Actually: line 109 (1-indexed) = </section>, line 110 = empty, line 111 = empty, line 112 = SIGNATURES comment
# I want to insert after line 109 (the </section>), before line 110

# New location section as a list of lines
location_section = """    <!-- VISIT US / Location -->
    <section class="px-margin-mobile mb-section-gap w-full reveal">
      <div class="max-w-2xl mx-auto bg-background border-t border-on-background/10 border-b border-on-background/10 py-12">
        <div class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          <div class="w-full md:w-1/3 text-center md:text-left">
            <h2 class="font-display-lg text-headline-lg-mobile text-background uppercase mb-4">Five/Cafe</h2>
            <p class="font-mono-label text-mono-label text-secondary mb-2">Coffee Shop</p>
            <address class="font-body-md text-body-md text-surface-lowest mb-6 line-break-normal">
              29J4+FFJ, Gehan Al Sadat,<br/>
              Mit Badr Khamees, El Mansoura 1,<br/>
              Dakahlia Governorate 7650101
            </address>
          </div>
          <div class="w-full md:w-2/3 bg-surface-container-lowest rounded-lg p-8 md:p-10">
            <div class="flex items-center gap-3 mb-4">
              <span class="font-xl text-primary">🕐</span>
              <div>
                <p class="font-semibold text-on-background">Opening Hours</p>
                <p class="font-mono-label text-mono-label text-on-background/60">Open · Closes 2 AM</p>
              </div>
            </div>
            <div class="flex items-center gap-3 mb-4">
              <span class="font-xl text-primary">💰</span>
              <div>
                <p class="font-semibold text-on-background">Price Range</p>
                <p class="font-mono-label text-mono-label text-on-background/60">E£1–200 per person</p>
              </div>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=29J4%2BFFJ%2C%20Gehan%20Al%20Sadat%2C%20Mit%20Badr%20Khamees%2C%20El%20Mansoura%2C%20Dakahlia%20Governorate%207650101" class="w-full bg-primary text-background font-mono-label text-mono-label py-3 px-6 rounded hover:bg-on-background transition-colors duration-300 text-center uppercase btn-interactive" target="_blank" rel="noopener noreferrer">
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- /VISIT US / Location -->

"""

# Insert after line index 109 (1-indexed) which is lines[108] in 0-indexed
# Actually lines[108] is line 109 (</section>), lines[109] is line 110 (empty), etc.
# I want to insert after lines[108] (</section>), so at position 109

new_lines = lines[:109] + [location_section] + lines[109:]

with open('public\\index.html', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print('Location section inserted after line 109')