import {createRealmContext} from '@realm/react';
import Realm, {BSON, ObjectSchema} from 'realm';

export class Category extends Realm.Object {
  _id: Realm.BSON.ObjectId = new BSON.ObjectID();
  imgURL!: string;
  categoryName!: string;

  static schema: ObjectSchema = {
    primaryKey: '_id',
    name: 'Category',
    properties: {
      _id: 'objectId',
      imgURL: 'string',
      categoryName: 'string',
    },
  };
}

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
  schema: [Word, Category],
});
