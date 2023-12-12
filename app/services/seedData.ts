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
        'https://drive.google.com/file/d/1F5K88Mhmq5x8uXw-ofWXVBXiMl-PPYrh/view?usp=drive_link',
      category: 'colors',
    }) as Word;
    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'sor',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/file/d/1r1h4_jb4xgx2GChfvNuCbPlKY5TYeB8D/view?usp=drive_link',
      category: 'colors',
    }) as Word;
    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'spî',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/file/d/1yx2L-5cyy07_H_JFagcboZXeDx2KAloq/view?usp=drive_link',
      category: 'colors',
    }) as Word;

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'kesk',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/file/d/1ehSIt-2Hgn5-SVusMmPglqaexywZC7RN/view?usp=drive_link',
      category: 'colors',
    }) as Word;

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'kûçik',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/file/d/1-Eq2KG0FuPeoNjAvwZGDjm1u8VdIoWU2/view?usp=drive_link',
      category: 'animals',
    }) as Word;

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'pisîk',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/file/d/1vOk1oYlhsbqOH9ojwN8GIeT6wHkqwkTs/view?usp=drive_link',
      category: 'animals',
    }) as Word;

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'jûjî',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/file/d/1GpT5mS_Fd9SJzjtH1xGB-N0Q5GpWbf7G/view?usp=drive_link',
      category: 'animals',
    }) as Word;

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'çivîk',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/file/d/1GvKrlWzSwGAzbgXhjXotKFgxjrGCypOE/view?usp=drive_link',
      category: 'animals',
    }) as Word;

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'sêv',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/file/d/1AoYH584E2-1jivqPIBopESIJZq_EzCU_/view?usp=drive_link',
      category: 'fruits',
    }) as Word;

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'hirmî',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/file/d/1VwmoXPD0Mo3JoSpzc_3UY2C-1jcEIj-2/view?usp=drive_link',
      category: 'fruits',
    }) as Word;

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'mûz',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/file/d/1So_iT2LOzURJHAml8RCQEQucScjxghYd/view?usp=drive_link',
      category: 'fruits',
    }) as Word;

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'trî',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/file/d/1jIZeSmiKlKAGt_sYqNGLfTx_NUm1RhLJ/view?usp=drive_link',
      category: 'fruits',
    }) as Word;

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'xelek',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/file/d/1nk0DMtA7t1YEOxq0odwRMJP-I7aNeK9h/view?usp=drive_link',
      category: 'geometric forms',
    }) as Word;

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'gilover',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/file/d/1zyCZXXptuCuYVNP0_Rr_wYnWh2fP5Xsl/view?usp=drive_link',
      category: 'geometric forms',
    }) as Word;

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'çargoşe',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/file/d/1uwMdUYHee9PR9VjQYpRlhY6aSslRJMBG/view?usp=drive_link',
      category: 'geometric forms',
    }) as Word;

    realm.create('Word', {
      _id: new BSON.ObjectID(),
      word: 'sêgoşe',
      image:
        'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
      audio:
        'https://drive.google.com/file/d/1YlhNaIfxq7A9G7FJWY2xdkmDjTA___BS/view?usp=drive_link',
      category: 'geometric forms',
    }) as Word;
  });
}, [realm]);
