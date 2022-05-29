import axios, { Method } from 'axios';
import environment from '../environments/environment.json';
import { Singleton } from './singleton';

export type QueryOptions = {[key: string]: string | number | undefined}

/**
 * Abstract class providing base tools to send requests to a distant api
 */
export abstract class Requester extends Singleton {
    private _baseUrl = environment.apiUrl;
    
    /** Path to add to the url to access the corresponding data  */
    protected abstract path: string;

    /** Concatenation of the base url and the path */
    protected get url() : string {
        return `${this._baseUrl}/${this.path}`;
    }

    /**
     * Get the url to use for the request
     * 
     * @param end The end part of the url
     * @returns The url as a `string`
     */
    protected completeUrl(end?: string): string {
        return `${this.url}${end || ''}`;
    }

    /**
     * Execute the query using axios with the pass options
     * @param config The `AxiosRequestConfig` to use 
     * @returns The response as json
     */
    protected async call<R>(method: Method, url: string): Promise<R> {
        /** @Todo - Add Token */
        const config = { method, url };
        const result = await axios(config);
        return result.data
    }
}