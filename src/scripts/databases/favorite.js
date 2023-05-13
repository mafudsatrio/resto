import CONFIG from "../globals/config";
import { openDB } from 'idb';

const TABLE = 'favorite_resto';

const dbPromise = openDB(CONFIG.DATABASE_NAME, 1, {
    upgrade(database) {
        database.createObjectStore(TABLE, { keyPath: 'id' });
    },
});

const GET_ALL = async () => (await dbPromise).getAll(TABLE);
const GET_DETAIL = async (id) => (await dbPromise).get(TABLE, id);
const STORE = async (resto) => (await dbPromise).add(TABLE, resto);
const DELETE = async (id) => (await dbPromise).delete(TABLE, id);

export {
    GET_ALL,
    GET_DETAIL,
    STORE,
    DELETE
};