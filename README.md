# HTTPS-proxy
This small server proxies all the https requests to the specified http server.
1. generate certificates for SSL
    ```
    openssl req -nodes -new -x509 -keyout server.key -out server.cert
    ```
    or install openssl first if you don't have it. 
    
    Fill in only 
    * Common Name (eg, fully qualified host name) []: [domain]
    * Email Address []:my.name@[mydomain]
    
    Note: the domain name has to be the same that you're going to use as a proxy target.
    
    Now you have server.cert and server.key
2. Create certs directory inside project working directory and move these two certificates there.
3. ```npm i && node app.js http://host:port```
4. Please do not forget that our certificates are self-signed and have to be added to the list og trusted certificates for your OS/browser.
