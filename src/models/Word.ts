import {createRealmContext} from '@realm/react';

import Realm, {BSON, ObjectSchema} from 'realm';

import {Category} from './Category';

export class Word extends Realm.Object<Word> {
  _id!: Realm.BSON.ObjectId;
  word!: string;
  image!: string;
  audio!: string;
  category!: string;

  static schema: ObjectSchema = {
    name: 'Word',
    primaryKey: '_id',
    properties: {
      _id: {type: 'objectId', default: () => new BSON.ObjectId()},
      word: 'string',
      image: 'string',
      audio: 'string',
      category: 'string',
    },
  };
}

export const RealmContext = createRealmContext({
  schema: [Word, Category],
});
