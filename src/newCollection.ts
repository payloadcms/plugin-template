import { CollectionConfig } from 'payload/types';

const newCollection: CollectionConfig = {
  slug: 'newCollection',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
}

export default newCollection;
