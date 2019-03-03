// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { User } from '../models/User';

export class UserApiRequestFactory extends BaseAPIRequestFactory {
	// TODO: allow passing of Configuration via Options (=> overwrites config set for this request factory
	
    public createUser(user: User, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError('Required parameter user was null or undefined when calling createUser.');
        }

		
		// Path Params
    	const localVarPath = '/user';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        requestContext.setHeaderParam("Content-Type", "application/json");
		// TODO: Should this be handled by ObjectSerializer? imo yes => confidential information included in local object should not be sent
        const needsSerialization = (<any>"User" !== "string") || requestContext.getHeaders()['Content-Type'] === 'application/json';
        const serializedBody = needsSerialization ? JSON.stringify(user || {}) : (user.toString() || ""); // TODO: `toString` call is unnecessary
        requestContext.setBody(serializedBody);
		
    	// Apply auth methods
    	
    	return requestContext;
    }
			
    public createUsersWithArrayInput(user: Array<User>, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError('Required parameter user was null or undefined when calling createUsersWithArrayInput.');
        }

		
		// Path Params
    	const localVarPath = '/user/createWithArray';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        requestContext.setHeaderParam("Content-Type", "application/json");
		// TODO: Should this be handled by ObjectSerializer? imo yes => confidential information included in local object should not be sent
        const needsSerialization = (<any>"Array&lt;User&gt;" !== "string") || requestContext.getHeaders()['Content-Type'] === 'application/json';
        const serializedBody = needsSerialization ? JSON.stringify(user || {}) : (user.toString() || ""); // TODO: `toString` call is unnecessary
        requestContext.setBody(serializedBody);
		
    	// Apply auth methods
    	
    	return requestContext;
    }
			
    public createUsersWithListInput(user: Array<User>, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError('Required parameter user was null or undefined when calling createUsersWithListInput.');
        }

		
		// Path Params
    	const localVarPath = '/user/createWithList';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        requestContext.setHeaderParam("Content-Type", "application/json");
		// TODO: Should this be handled by ObjectSerializer? imo yes => confidential information included in local object should not be sent
        const needsSerialization = (<any>"Array&lt;User&gt;" !== "string") || requestContext.getHeaders()['Content-Type'] === 'application/json';
        const serializedBody = needsSerialization ? JSON.stringify(user || {}) : (user.toString() || ""); // TODO: `toString` call is unnecessary
        requestContext.setBody(serializedBody);
		
    	// Apply auth methods
    	
    	return requestContext;
    }
			
    public deleteUser(username: string, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new RequiredError('Required parameter username was null or undefined when calling deleteUser.');
        }

		
		// Path Params
    	const localVarPath = '/user/{username}'
            .replace('{' + 'username' + '}', encodeURIComponent(String(username)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
		
    	// Apply auth methods
    	
    	return requestContext;
    }
			
    public getUserByName(username: string, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new RequiredError('Required parameter username was null or undefined when calling getUserByName.');
        }

		
		// Path Params
    	const localVarPath = '/user/{username}'
            .replace('{' + 'username' + '}', encodeURIComponent(String(username)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
		
    	// Apply auth methods
    	
    	return requestContext;
    }
			
    public loginUser(username: string, password: string, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new RequiredError('Required parameter username was null or undefined when calling loginUser.');
        }

		
        // verify required parameter 'password' is not null or undefined
        if (password === null || password === undefined) {
            throw new RequiredError('Required parameter password was null or undefined when calling loginUser.');
        }

		
		// Path Params
    	const localVarPath = '/user/login';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
        if (username !== undefined) {
        	requestContext.setQueryParam("username", ObjectSerializer.serialize(username, "string"));
        }
        if (password !== undefined) {
        	requestContext.setQueryParam("password", ObjectSerializer.serialize(password, "string"));
        }
	
		// Header Params
	
		// Form Params


		// Body Params
		
    	// Apply auth methods
    	
    	return requestContext;
    }
			
    public logoutUser(options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
		// Path Params
    	const localVarPath = '/user/logout';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
		
    	// Apply auth methods
    	
    	return requestContext;
    }
			
    public updateUser(username: string, user: User, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new RequiredError('Required parameter username was null or undefined when calling updateUser.');
        }

		
        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError('Required parameter user was null or undefined when calling updateUser.');
        }

		
		// Path Params
    	const localVarPath = '/user/{username}'
            .replace('{' + 'username' + '}', encodeURIComponent(String(username)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        requestContext.setHeaderParam("Content-Type", "application/json");
		// TODO: Should this be handled by ObjectSerializer? imo yes => confidential information included in local object should not be sent
        const needsSerialization = (<any>"User" !== "string") || requestContext.getHeaders()['Content-Type'] === 'application/json';
        const serializedBody = needsSerialization ? JSON.stringify(user || {}) : (user.toString() || ""); // TODO: `toString` call is unnecessary
        requestContext.setBody(serializedBody);
		
    	// Apply auth methods
    	
    	return requestContext;
    }
			
}

// TODO: find way to split these two files (both dependent on apitemplatefiles)



export class UserApiResponseProcessor {
	
	/**
	 *
	 * @throws ApiException if the response code was not in [200, 299]
	 */
    public createUser(response: ResponseContext):   void  {      
        if (isCodeInRange("0", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "successful operation");
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
        	return;
        }
        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
	/**
	 *
	 * @throws ApiException if the response code was not in [200, 299]
	 */
    public createUsersWithArrayInput(response: ResponseContext):   void  {      
        if (isCodeInRange("0", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "successful operation");
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
        	return;
        }
        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
	/**
	 *
	 * @throws ApiException if the response code was not in [200, 299]
	 */
    public createUsersWithListInput(response: ResponseContext):   void  {      
        if (isCodeInRange("0", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "successful operation");
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
        	return;
        }
        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
	/**
	 *
	 * @throws ApiException if the response code was not in [200, 299]
	 */
    public deleteUser(response: ResponseContext):   void  {      
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Invalid username supplied");
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "User not found");
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
        	return;
        }
        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
	/**
	 *
	 * @throws ApiException if the response code was not in [200, 299]
	 */
    public getUserByName(response: ResponseContext):  User  {      
        if (isCodeInRange("200", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: User = ObjectSerializer.deserialize(jsonBody, "User") as User;            
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Invalid username supplied");
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "User not found");
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: User = ObjectSerializer.deserialize(jsonBody, "User") as User;            
			return body;        		
        }
        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
	/**
	 *
	 * @throws ApiException if the response code was not in [200, 299]
	 */
    public loginUser(response: ResponseContext):  string  {      
        if (isCodeInRange("200", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: string = ObjectSerializer.deserialize(jsonBody, "string") as string;            
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Invalid username/password supplied");
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: string = ObjectSerializer.deserialize(jsonBody, "string") as string;            
			return body;        		
        }
        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
	/**
	 *
	 * @throws ApiException if the response code was not in [200, 299]
	 */
    public logoutUser(response: ResponseContext):   void  {      
        if (isCodeInRange("0", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "successful operation");
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
        	return;
        }
        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
	/**
	 *
	 * @throws ApiException if the response code was not in [200, 299]
	 */
    public updateUser(response: ResponseContext):   void  {      
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Invalid user supplied");
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "User not found");
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
        	return;
        }
        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
}
