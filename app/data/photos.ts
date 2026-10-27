// Credits for the photos in public/images. Creative Commons photos must keep their attribution on the site,
// so the footer lists every entry here. Add a line whenever a photo is added.
export type PhotoCredit = { file: string; author: string; license: string; licenseUrl?: string; source: string };

const commons = (file: string, page: string, author: string, license: "CC BY 3.0" | "CC BY-SA 3.0" | "CC BY-SA 4.0"): PhotoCredit => ({
  file,
  author,
  license,
  licenseUrl: `https://creativecommons.org/licenses/${license.slice(3).toLowerCase().replace(" ", "/")}/`,
  source: `https://commons.wikimedia.org/wiki/File:${page}`,
});

export const PHOTO_CREDITS: PhotoCredit[] = [
  commons("tavan-bogd-valley.jpg", "Glacier_mongolia_zibbi2.JPG", "Dorhodor", "CC BY-SA 3.0"),
  commons("potanin-glacier.jpg", "Glacier_mogolia_zibbi.JPG", "Dorhodor", "CC BY-SA 3.0"),
  commons("potanin-glacier-wide.jpg", "Pontuninii_Glacier.JPG", "Altaihunters", "CC BY-SA 3.0"),
  commons("khoton-lake-wide.jpg", "Horgan_Lake.jpg", "Altaihunters", "CC BY-SA 3.0"),
  commons("khoton-lake.jpg", "Hoton_lake_-_panoramio.jpg", "Mongolia Expeditions", "CC BY 3.0"),
  commons("eagle-hunter-rock.jpg", "Golden_Eagle_Festival_Mongolia_14.jpg", "Gabideen", "CC BY-SA 4.0"),
  commons("eagle-hunters-trio.jpg", "Golden_Eagle_Festival_Mongolia_15.jpg", "Gabideen", "CC BY-SA 4.0"),
  commons("festival-river-riders.jpg", "Golden_Eagle_Festival_Mongolia_6.jpg", "Gabideen", "CC BY-SA 4.0"),
  commons("festival-river-crossing.jpg", "Golden_Eagle_Festival_Mongolia_5.jpg", "Gabideen", "CC BY-SA 4.0"),
  commons("festival-eagle-landing.jpg", "Golden_Eagle_Festival_Mongolia_2.jpg", "Gabideen", "CC BY-SA 4.0"),
  {
    file: "altai-relief.jpg",
    author: "Terrain Tiles on AWS (SRTM / USGS, GMTED, ETOPO1)",
    license: "Open data, attribution",
    licenseUrl: "https://github.com/tilezen/joerd/blob/master/docs/attribution.md",
    source: "https://registry.opendata.aws/terrain-tiles/",
  },
  ...["eagle-hunter-altai.jpg", "festival-riders.jpg", "festival-eagle.jpg"].map((file) => ({
    file,
    author: "Fadhil Abhimantra",
    license: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    source: "https://unsplash.com/@fadhilabhimantra",
  })),
];
