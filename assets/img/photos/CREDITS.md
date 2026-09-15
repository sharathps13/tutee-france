# Photo credits

All four photographs are French subjects sourced from Wikimedia Commons. Two are
**CC BY**, which makes the footer credit line a licence obligation rather than a
courtesy; the other two are **CC0** and are credited anyway, as on the other
pages. The line is rendered from the `data-photo-credit` element and generated
from `PHOTO_CREDIT` in `_tooling/localise_fr.py`. If you swap any photo, update
this file **and** that constant, then re-run `localise_fr.py`,
`assemble.py france` and `build_unipage.py france`.

CC BY-SA, NC and ND images were deliberately avoided, as on the UK, Canadian,
Irish, German, New Zealand and Australian pages. That rule cost two otherwise
ideal candidates here: the best Sorbonne courtyard frames on Commons are CC BY-SA
3.0, and every high-resolution shot of the Strasbourg Palais Universitaire
*facade* is CC BY-SA 4.0 — the CC0 pediment shot used below was the only
compliant alternative, and is arguably the better image anyway because the
carved `UNIVERSITÉ DE STRASBOURG` reads at thumbnail size.

Each file was cropped and resized from the Commons original with `sips`. The
output dimensions match the Australian, New Zealand, German, Irish and Canadian
files, which in turn match the slots, so the layout cannot shift.

**No photograph has an identifiable person as its subject** — the same rule the
other six pages follow. The Place de la Sorbonne hero contains pedestrians
crossing the square perhaps forty metres from the camera; they are
unidentifiable at the delivered 1200 px width and the frame is dominated by the
chapel, which is the subject. The Bordeaux frame is the same case at greater
distance.

---

## students-campus.jpg — hero (`#home`), 1200×1143

> **The filename does not describe the subject**, and it is kept because
> `students-campus.jpg` is a literal key in the compiled stylesheet — the class
> `bg-[url('/assets/img/photos/students-campus.jpg')]` plus the matching escaped
> selector and `url()` in `assets/css/main.css`, and the `<link rel="preload">`
> in the page shell. Renaming the file means editing all of those together;
> `verify_site.py` fails on a mismatch, the browser fails silently.

- **Depicts:** the chapel of the Sorbonne seen from the Place de la Sorbonne,
  Paris — France's most recognisable university building and the direct
  counterpart of the UK page's Radcliffe Camera, Ireland's Campanile, New
  Zealand's Otago Clocktower and Australia's Sydney Quadrangle.
- **Commons file page:** https://commons.wikimedia.org/wiki/File:Place_de_la_Sorbonne,_Paris_27_March_2017.jpg
- **Author / photographer:** Guilhem Vellut
- **Licence:** CC BY 2.0 — https://creativecommons.org/licenses/by/2.0
- **Attribution required:** **yes**
- **Crop:** original 5299×3532 (1.50:1) → `sips -c 3532 3708 --cropOffset 0 795`
  (1.0499:1, centred) → resized to 1200×1143, quality 82. A centred crop is
  correct here, unlike the Australian panorama: the photographer squared up on
  the chapel, so the dome, the pediment and the avenue of trees are already
  symmetric about the frame's vertical axis.
- **Why 1.05:1 and not the original 3:2:** the hero panel measures about
  **596×584 CSS px on desktop (1.02:1) and 319×292 on mobile (1.09:1)** —
  essentially square at every breakpoint. The div is `bg-cover bg-center`, so a
  1.5:1 file would have a third of its width thrown away.
- **Safe to reshape:** referenced only as a CSS `background-image` and a
  `<link rel="preload">` — there is no `<img>` tag for it on either page, so its
  ratio has no effect on layout.

## team-working.jpg — `#relocate` ("The Pathway to Settlement"), 1400×933

- **Depicts:** the pediment of the Palais Universitaire, Université de
  Strasbourg, with the carved `LITTERIS ET PATRIAE` frieze and the
  `UNIVERSITÉ DE STRASBOURG` lettering below it.
- **Commons file page:** https://commons.wikimedia.org/wiki/File:Fa%C3%A7ade_du_palais_universitaire_(31509527784).jpg
- **Author / photographer:** Zéphyrios
- **Licence:** CC0 — https://creativecommons.org/publicdomain/zero/1.0
- **Attribution required:** no (credited anyway)
- **Crop:** original 4774×3264 (1.46:1) → `sips -c 3182 4773 --cropOffset 0 0`
  (exact 3:2, **anchored at the top**) → resized to 1400×933, quality 82.
  Anchoring at the top keeps the full statuary group and the frieze; the 82 px
  a centred crop would have gained at the bottom is plain masonry.
- **Note:** this image is rendered with `w-full h-auto object-cover`, so **its
  aspect ratio drives the layout**. Any replacement must also be 3:2.

## family.jpg — `#relocate` ("Relocating with Your Family?"), 1400×1050

- **Depicts:** the rooftops of Paris with the Sacré-Cœur on the butte
  Montmartre, seen from the Tour Montparnasse.
- **Commons file page:** https://commons.wikimedia.org/wiki/File:Montmartre_with_Sacre_Coeur,_seen_from_Tour_Montparnasse.jpg
- **Author / photographer:** AlfvanBeem
- **Licence:** CC0 — https://creativecommons.org/publicdomain/zero/1.0
- **Attribution required:** no (credited anyway)
- **Crop:** original 3488×2616 (already 4:3) → `sips -c 1716 2288 --cropOffset
  900 576` (a tighter 4:3 window, **not centred**) → resized to 1400×1050,
  quality 82. **The y offset is load-bearing:** the slot renders at `h-[300px]`
  (`lg:h-[350px]`) on desktop and `h-[180px]` on mobile with `object-cover`, and
  the top third of the original is hazy sky and a flat suburban horizon. Cutting
  in at y=900 drops the haze entirely and fills the visible band with dense
  rooftops and the basilica, which is the whole point of the frame.

## france-city.jpg — `#universities` ("Why France?") background panel, 1400×933

> Referenced by the Tailwind arbitrary-value class
> `bg-[url('/assets/img/photos/france-city.jpg')]`, which is a **literal key**
> into `assets/css/main.css`. Both the class in the HTML and the escaped
> selector plus `url()` in the stylesheet must be changed together — this file
> was repointed from `australia-city.jpg` when the shared CSS was copied over.

- **Depicts:** the Place de la Bourse, Bordeaux, with the Palais de la Bourse
  and the Hôtel des Fermes.
- **Commons file page:** https://commons.wikimedia.org/wiki/File:Bordeaux_-_Place_de_la_Bourse_10.jpg
- **Author / photographer:** P. Hughes
- **Licence:** CC BY 4.0 — https://creativecommons.org/licenses/by/4.0
- **Attribution required:** **yes**
- **Crop:** original 4288×2848 (1.505:1) → `sips -c 2600 3900 --cropOffset 0 194`
  (exact 3:2, **anchored at the top**, centred horizontally) → resized to
  1400×933, quality 82. Anchoring at the top keeps the full elevation of both
  wings and the cloud-filled sky, and discards a band of empty cobbles that a
  centred crop would have kept.
- **Why Bordeaux and not Paris:** the hero is already Paris and the family panel
  is already Paris. A third Paris frame would have made the page look like a
  city guide to one arrondissement rather than a country page — the other six
  pages all spread their four images across at least three cities.
