import {createRealmContext} from '@realm/react';
import Realm, {BSON, ObjectSchema} from 'realm';

export class Word extends Realm.Object<Word> {
  _id: Realm.BSON.ObjectId = new BSON.ObjectID();
  word!: string;
  image!: string;
  audio!: string;
  category!: string;

  static schema: ObjectSchema = {
    name: 'Word',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      word: 'string',
      image: 'string',
      audio: 'string',
      category: 'string',
    },
  };
}

export const RealmContext = createRealmContext({
  schema: [Word],
});
