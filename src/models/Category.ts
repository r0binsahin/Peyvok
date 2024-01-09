import Realm, {BSON, ObjectSchema} from 'realm';

export class Category extends Realm.Object<Category> {
  _id!: Realm.BSON.ObjectId;
  imgURL!: string;
  categoryName!: string;
  categoryNameKU!: string;
  categoryAudio!: string;

  static schema: ObjectSchema = {
    name: 'Category',
    primaryKey: '_id',
    properties: {
      _id: {type: 'objectId', default: () => new BSON.ObjectId()},
      imgURL: 'string',
      categoryName: 'string',
      categoryNameKU: 'string',
      categoryAudio: 'string',
    },
  };
}
