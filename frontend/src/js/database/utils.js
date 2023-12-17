import path from 'path-browserify'

export function getPath(...info){
    //环境变量不需要传统的引入 import or request
    const protocol = import.meta.env.VITE_DB_PATH.includes('localhost')?'http://':"https://"
    const endpoint = protocol + path.join(import.meta.env.VITE_DB_PATH,...info)

    return endpoint;
};