import {useRealm} from '@realm/react';
import {useCallback} from 'react';
import {Word} from '../models/Word';
import {BSON} from 'realm';
const realm = useRealm();

export const data = useCallback(() => {
  realm.write(() => {
    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'zer',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/uc?export=media&id=1F5K88Mhmq5x8uXw-ofWXVBXiMl-PPYrh',
      category: {
        _id: new BSON.ObjectID(),
        imgURL:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        categoryName: 'colors',
      },
    });

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'sor',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/uc?export=media&id=1r1h4_jb4xgx2GChfvNuCbPlKY5TYeB8D',
      category: {
        _id: new BSON.ObjectID(),
        imgURL:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        categoryName: 'colors',
      },
    });

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'spî',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/uc?export=media&id=1yx2L-5cyy07_H_JFagcboZXeDx2KAloq',
      category: {
        _id: new BSON.ObjectID(),
        imgURL:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        categoryName: 'colors',
      },
    });

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'kesk',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/uc?export=media&id=1ehSIt-2Hgn5-SVusMmPglqaexywZC7RN',
      category: {
        _id: new BSON.ObjectID(),
        imgURL:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        categoryName: 'colors',
      },
    });

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'kûçik',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/uc?export=media&id=1-Eq2KG0FuPeoNjAvwZGDjm1u8VdIoWU2',
      category: {
        _id: new BSON.ObjectID(),
        imgURL:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        categoryName: 'animals',
      },
    });

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'pisîk',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/uc?export=media&id=1vOk1oYlhsbqOH9ojwN8GIeT6wHkqwkTs',
      category: {
        _id: new BSON.ObjectID(),
        imgURL:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        categoryName: 'animals',
      },
    });

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'jûjî',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/uc?export=media&id=1GpT5mS_Fd9SJzjtH1xGB-N0Q5GpWbf7G',
      category: {
        _id: new BSON.ObjectID(),
        imgURL:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        categoryName: 'animals',
      },
    });

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'çivîk',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/uc?export=media&id=1GvKrlWzSwGAzbgXhjXotKFgxjrGCypOE',
      category: {
        _id: new BSON.ObjectID(),
        imgURL:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        categoryName: 'animals',
      },
    });

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'sêv',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/uc?export=media&id=1AoYH584E2-1jivqPIBopESIJZq_EzCU_',
      category: {
        _id: new BSON.ObjectID(),
        imgURL:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        categoryName: 'fruits',
      },
    });

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'hirmî',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/uc?export=media&id=1VwmoXPD0Mo3JoSpzc_3UY2C-1jcEIj-2',
      category: {
        _id: new BSON.ObjectID(),
        imgURL:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        categoryName: 'fruits',
      },
    });

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'mûz',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/uc?export=media&id=1So_iT2LOzURJHAml8RCQEQucScjxghYd',
      category: {
        _id: new BSON.ObjectID(),
        imgURL:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        categoryName: 'fruits',
      },
    });

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'trî',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/uc?export=media&id=1jIZeSmiKlKAGt_sYqNGLfTx_NUm1RhLJ',
      category: {
        _id: new BSON.ObjectID(),
        imgURL:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        categoryName: 'fruits',
      },
    });

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'xelek',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/uc?export=media&id=1nk0DMtA7t1YEOxq0odwRMJP-I7aNeK9h',
      category: {
        _id: new BSON.ObjectID(),
        imgURL:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        categoryName: 'shapes',
      },
    });

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'gilover',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/uc?export=media&id=1zyCZXXptuCuYVNP0_Rr_wYnWh2fP5Xsl',
      category: {
        _id: new BSON.ObjectID(),
        imgURL:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        categoryName: 'shapes',
      },
    });

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'çargoşe',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/uc?export=media&id=1uwMdUYHee9PR9VjQYpRlhY6aSslRJMBG',
      category: {
        _id: new BSON.ObjectID(),
        imgURL:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        categoryName: 'shapes',
      },
    });

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'sêgoşe',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/uc?export=media&id=1YlhNaIfxq7A9G7FJWY2xdkmDjTA___BS',
      category: {
        _id: new BSON.ObjectID(),
        imgURL:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        categoryName: 'shapes',
      },
    });
  });
}, [realm]);

export const createCat = useCallback(() => {
  realm.write(() => {
    realm.create('Category', {
      _id: new BSON.ObjectID(),
      imgURL:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      categoryName: 'colors',
    });
    console.log('cat 1');
    realm.create('Category', {
      _id: new BSON.ObjectID(),
      imgURL:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      categoryName: 'animals',
    });
    console.log('cat 2');
    realm.create('Category', {
      _id: new BSON.ObjectID(),
      imgURL:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      categoryName: 'fruits',
    });
    console.log('cat 3');

    realm.create('Category', {
      _id: new BSON.ObjectID(),
      imgURL:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      categoryName: 'shapes',
    });

    console.log('cat 4');
  });

  console.log('Adding data to the database...');
}, [realm]);
