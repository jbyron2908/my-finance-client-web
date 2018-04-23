/* eslint-disable no-undef */
import RxDB, { QueryChangeDetector } from 'rxdb';
import collections from '../collections/index';

QueryChangeDetector.enable();
QueryChangeDetector.enableDebugging();

RxDB.plugin(require('pouchdb-adapter-idb'));

let dbPromise = null;

const create = async function () {
  const db = await RxDB.create({ name: 'heroesreactdb', adapter: 'idb', password: 'myLongAndStupidPassword' });
  await Promise.all(collections.map(colData => db.collection(colData)));
  return db;
};

export default function get() {
  if (!dbPromise) { dbPromise = create(); }
  return dbPromise;
}
