/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 //Load HTTP module
 var http = require("http");

 //Create HTTP server and listen on port 8000 for requests
 http.createServer(function (request, response) {

    // Set the response HTTP header with HTTP status and Content type
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body "Hello World"
    response.send('Hello Worlddd\n');
 }).listen(8000);

 // Print URL for accessing server
 console.log('Server running at http://127.0.0.1:8000/')
