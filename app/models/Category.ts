import {createRealmContext} from '@realm/react';
import Realm, {BSON, ObjectSchema} from 'realm';

export class Category extends Realm.Object<Category> {
  _id: Realm.BSON.ObjectId = new BSON.ObjectID();
  imgURL!: string;
  categoryName!: string;
  categoryNameKU!: string;
  categoryAudio!: string;

  static schema: ObjectSchema = {
    name: 'Category',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      imgURL: 'string',
      categoryName: 'string',
      categoryNameKU: 'string',
      categoryAudio: 'string',
    },
  };
}
