/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-04-28
 * @author Liang <liang@maichong.it>
 */

export default class Address extends service.Model {
  static label = 'Address';
  static title = 'name';
  static defaultColumns = 'user name tel geo province city createdAt';
  static defaultSort = '-createdAt';
  static api = {
    list: 3,
    update: 3,
    remove: 3
  };

  static fields = {
    user: {
      label: 'User',
      ref: 'user.User',
      required: true,
      private: true
    },
    name: {
      label: 'Name',
      type: String,
      default: ''
    },
    tel: {
      label: 'Tel',
      type: String
    },
    geo: {
      label: 'GEO',
      type: 'geo'
    },
    country: {
      label: 'Country',
      type: String
    },
    province: {
      label: 'Province',
      type: String
    },
    city: {
      label: 'City',
      type: String
    },
    district: {
      label: 'District',
      type: String
    },
    street: {
      label: 'Street',
      type: String
    },
    building: {
      label: 'Building',
      type: String,
      default: ''
    },
    detail: {
      label: 'Detail',
      type: String
    },
    createdAt: {
      label: 'Created At',
      type: Date
    }
  };

  preSave() {
    if (!this.createdAt) {
      this.createdAt = new Date;
    }
  }
}
