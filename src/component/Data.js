module.exports.content = "<h2>Google Summer of Code 2019 Final Report. The process of integration of Software heritage.</h2>\n" +
    "                            <p class=\"excert\">\n" +
    "                                </p><h1>GSoC Final Report: Integration of Software Heritage in <a href=\"https://www.fossology.org/\">FOSSology</a></h1>\n" +
    "<p>FOSSology is an open-source license compliance software system and toolkit. As a toolkit, a user can run license, copyright and export control scans from the command line. Users files can be imported, stored and tracked in FOSSology for compliance workflow experience. License, Copyright, and export scanners are tools available in FOSSology to help with the user's compliance.</p>\n" +
    "<p>The FOSSology system is a combination of agent runs in series to perform a specific task. Fossology has several agents like unpacking, license analysis, Copyright, etc. Agents are used to performing analysis or management tasks related to anything in the database. Each agent in <a href=\"https://www.fossology.org/\">FOSSology</a> performs one task.</p>\n" +
    "<p>In this project, I was working on an agent to integrate the <a href=\"https://www.fossology.org/\">FOSSology</a> in software Heritage. There were several steps to implement the feature. The total work is divided into four stages. The stages are dependent on each other and the total flow can be understood by the diagram as described below.</p>\n" +
    "<p><img src=\"https://i.ibb.co/nQ0J6YS/Google-Summer-of-Code-Project-Report.png\" alt=\"Images Basic Work flow\"></p>\n" +
    "<p><strong>Basic Details</strong></p>\n" +
    "<ul>\n" +
    "<li><a href=\"https://docs.google.com/document/d/1j_ttnXc_D-4CHZHl0jvSciwYWYIo7cAY1R7pzR5nq10/edit?usp=sharing\">Project Report</a> </li>\n" +
    "<li><a href=\"https://github.com/sandipbhuyan/fossology/projects/1\">Workflow</a></li>\n" +
    "<li><a href=\"https://github.com/sandipbhuyan/fossology/wiki\">Wiki</a></li>\n" +
    "</ul>\n" +
    "<p>As we have seen in the above picture I have gone through four stages to complete the project</p>\n" +
    "<ul>\n" +
    "<li>Calculate the hash values</li>\n" +
    "<li>Database Schema creation for software heritage</li>\n" +
    "<li>Agent creation and Data storing</li>\n" +
    "<li>Display the fetched records</li>\n" +
    "</ul>\n" +
    "<h2>Calculate the hash values</h2>\n" +
    "<p>I was working on this section during my first evaluation. This section deals with the <code>sha256</code> calculation of a file. Previously when a package is being uploaded in <a href=\"https://www.fossology.org/\">FOSSology</a> the <code>md5</code> and <code>sha1</code> values are being calculated for the files of the package and is being inserted into the <code>pfile</code> table by the ununpack agent(<strong>which will run while uploading a package</strong>). My job was to alter the table pfile to add a <code>pfile_sha256</code> column in it and to calculate the <code>sha256</code> for each file and stored it in a new column in the same column. The development phases contain several lines of code changes and database schema alteration along with migration commands to run on the existing data in databases. In <code>pfile</code> table of the database, I have added one column named <code>pfile_sha256</code>. The structure of the column is:-</p>\n" +
    "<pre><code>|column           | Type          |\n" +
    "|pfile_sha256     | character(64) |</code></pre>\n" +
    "<p>The code for calculating hash values can be found at <code>utils.c</code> file of <code>unpack agent</code> and the process it does is similar to the code what is being shown bellow</p>\n" +
    "<pre><code>    snprintf(command, PATH_MAX + 13, \"sha256sum '%s'\", CI-&gt;Source);\n" +
    "    FILE* file = popen(command, \"r\");\n" +
    "    if (file != (FILE*) NULL)\n" +
    "    {\n" +
    "      read = fscanf(file, \"%64s\", SHA256);\n" +
    "      retcode = WEXITSTATUS(pclose(file));\n" +
    "    }\n" +
    "    if (file == (FILE*) NULL || retcode != 0 || read != 1)\n" +
    "    {\n" +
    "      LOG_FATAL(\"Unable to calculate SHA256 of %s\\n\", CI-&gt;Source);\n" +
    "      SafeExit(56);\n" +
    "    }</code></pre>\n" +
    "<p>The <code>SHA256</code> is required to get the value from software heritage.</p>\n" +
    "<h4>Commits</h4>\n" +
    "<ul>\n" +
    "<li><a href=\"https://github.com/fossology/fossology/commit/d3641939e358500ddc21eedca00b70bceb919fb5\">#d364193</a> <code>feat(db): Calculate the sha256 value of the uploading file and store it in database</code>\n" +
    "<h2>Database Schema Creation for Software Heritage</h2>\n" +
    "<p>I was working on this feature on my second evaluation. It deals with the schema creation to store software heritage data. The data fetched from [Software Heritage]() is going to save in a table named <code>software_heritage</code> table. I and Mentors decided to store two types of data(<code>origin</code> and <code>license</code>) from [software heritage]() archive along with two more columns(<code>primary key</code> and <code>pfile_fk</code>). The mote is to relate each pfile data with software heritage table. The table structure can be seen as:-\n" +
    "<strong> Table Structure </strong></p></li>\n" +
    "</ul>\n" +
    "<table>\n" +
    "<thead>\n" +
    "<tr>\n" +
    "<th>Column</th>\n" +
    "<th style=\"text-align: center;\">Type</th>\n" +
    "<th style=\"text-align: right;\">Modifiers</th>\n" +
    "</tr>\n" +
    "</thead>\n" +
    "<tbody>\n" +
    "<tr>\n" +
    "<td>Software_heritage_pk</td>\n" +
    "<td style=\"text-align: center;\">integer</td>\n" +
    "<td style=\"text-align: right;\">not null default nextval('software_heritage_pk_seq'::regclass)</td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "<td>Pfile_fk</td>\n" +
    "<td style=\"text-align: center;\">integer</td>\n" +
    "<td style=\"text-align: right;\">not null</td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "<td>License</td>\n" +
    "<td style=\"text-align: center;\">text</td>\n" +
    "<td style=\"text-align: right;\"></td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "<td>Origin</td>\n" +
    "<td style=\"text-align: center;\">text</td>\n" +
    "<td style=\"text-align: right;\"></td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "<pre><code>Foreign-key constraints:\n" +
    "    \"software_heritage_pfile_fk_fkey\" FOREIGN KEY (pfile_fk) REFERENCES pfile(pfile_pk) ON DELETE CASCADE</code></pre>\n" +
    "<p>As you can see here the primary key is <code>software_heritage_pk</code>, <code>pfile_fk</code> is the foreign key and other two columns <code>license</code> and <code>origin</code> holds the records from the software heritage. </p>\n" +
    "<h2>Creating Software Heritage Agent</h2>\n" +
    "<p>This one is the most exciting and the heart of my project. I was working on this section during my second evaluation of GSoC. This feature includes calling the API all the features that the agent is going to perform and various sections like</p>\n" +
    "<ul>\n" +
    "<li>Redundancy check feature</li>\n" +
    "<li>API calling feature</li>\n" +
    "<li>Storing the value in Software Heritage Table</li>\n" +
    "<li>Inserting the License Info in <code>license_file</code> table.</li>\n" +
    "<li>Registering the agent.</li>\n" +
    "<li>\n" +
    "<p>Basic Visualization of the data\n" +
    "Let's discuss in a brief about all the things:</p>\n" +
    "<h3>Redundancy Check</h3>\n" +
    "<p>If the software heritage is returning a <code>404</code> HTTP Exception for a record then we are not inserting that record into <code>software_heritage</code> table. The application is made in such a way that a user can run the <code>softwareHeritage</code> agent as many time as they want to run. But the <code>softwareHeritage</code> agent will run on those files of a package whose records are not in the <code>software_heritage</code> table. As a result, the redundancy was reduced back to zero. I have added two sections to make it happen. One is in <code>SoftwareHeritageDao</code> and another one in <code>softwareHeritage</code> agent. In <code>SoftwareHeritageDao</code> <code>getSoftwareHeritagePfileFk</code> is taking <code>uploadId</code> as a parameter and returning the <code>pfile ids</code> of the files of a package whose records are there in <code>software_heritage</code> table. In <code>softwareHeritage</code> agent we call the API for those files whose records are not there.\n" +
    "<strong>SoftwareHeritageDao</strong></p>\n" +
    "<pre><code>/**\n" +
    "* @brief Get all the pfile_fk stored in software heritage table\n" +
    "* @param Integer $uploadId\n" +
    "* @return array\n" +
    "*/\n" +
    "public function getSoftwareHeritagePfileFk($uploadId)\n" +
    "{\n" +
    "$uploadTreeTableName = $this-&gt;uploadDao-&gt;getUploadtreeTableName($uploadId);\n" +
    "$stmt = __METHOD__.$uploadTreeTableName;\n" +
    "$sql = \"SELECT software_heritage.pfile_fk AS pfile_fk  \n" +
    "        FROM  $uploadTreeTableName \n" +
    "        JOIN software_heritage \n" +
    "        ON $uploadTreeTableName.upload_fk = $1 \n" +
    "        AND software_heritage.pfile_fk = $uploadTreeTableName.pfile_fk\";\n" +
    "$rows = $this-&gt;dbManager-&gt;getRows($sql,array($uploadId),$stmt);\n" +
    "$results = [];\n" +
    "foreach ($rows as $row) {\n" +
    "    $results[] = $row['pfile_fk'];\n" +
    "}\n" +
    "return $results;\n" +
    "}</code></pre>\n" +
    "<p><strong>softwareHeritageAgent</strong></p>\n" +
    "<pre><code>    /*codes*/\n" +
    "    // Getting the pfile FKs\n" +
    "    $pfileFks = $this-&gt;shDao-&gt;getSoftwareHeritagePfileFk($uploadId);\n" +
    "    /*codes*/\n" +
    "    foreach(/*codes*/)\n" +
    "    {\n" +
    "        // C\n" +
    "        if(!in_array($pfileDetail['pfile_pk'],$pfileFks))\n" +
    "        {\n" +
    "           /*codes*/\n" +
    "        }\n" +
    "        $this-&gt;heartbeat(1);\n" +
    "    }</code></pre>\n" +
    "<h3>API Calling and Storing Data</h3>\n" +
    "<p>The next step is to get call the API for the files and get the values from <code>softwareHeritage</code>. Then Api is being stored in the <code>agent/softwareHeritage.conf</code> file. </p>\n" +
    "<pre><code>api[url] = \"https://archive.softwareheritage.org\"\n" +
    "api[uri] = \"/api/1/content/sha256:\"\n" +
    "api[content] = \"/license\"</code></pre>\n" +
    "<p>We use <code>GUZZLEHTTP</code> to call the API. The API is called for the files of the package and the result is bing returned for further process. If it is returning 404 HTTP RESPONSE then a blank license array is being returned. and no values are being stored in the database along with the <code>license_file</code> data are getting stored too in the database.\n" +
    "<strong>API Calling and Data Storing</strong></p>\n" +
    "<pre><code>/**\n" +
    " * @brief Get the license details from software heritage\n" +
    " * @param String $sha256\n" +
    " *\n" +
    " * @return array\n" +
    " */\n" +
    "protected function getSoftwareHeritageLicense($sha256)\n" +
    "{\n" +
    "    $client = new Client(['http_errors' =&gt; false]);\n" +
    "    $response = $client-&gt;get($this-&gt;configuration['api']['url'].$this-&gt;configuration['api']['uri'].$sha256.$this-&gt;configuration['api']['content']);\n" +
    "    $statusCode = $response-&gt;getStatusCode();\n" +
    "    if(200 === $statusCode)\n" +
    "    {\n" +
    "        $responseContent = json_decode($response-&gt;getBody()-&gt;getContents(),true);\n" +
    "        $licenseRecord = $responseContent[\"facts\"][0][\"licenses\"];\n" +
    "\n" +
    "        return $licenseRecord;\n" +
    "    }\n" +
    "    else\n" +
    "    {\n" +
    "        return [];\n" +
    "    }\n" +
    "}\n" +
    "\n" +
    "/**\n" +
    " * @brief Insert the License Details in softwareHeritage table\n" +
    " * @param int $pfileId\n" +
    " * @param array $licenses\n" +
    " * @param int $agentId\n" +
    " * @return boolean True if finished\n" +
    " */\n" +
    "protected function insertSoftwareHeritageRecord($pfileId,$licenses,$agentId)\n" +
    "{\n" +
    "    foreach($licenses as $license)\n" +
    "    {\n" +
    "        $this-&gt;shDao-&gt;setshDetails($pfileId, $license);\n" +
    "        $l = $this-&gt;licenseDao-&gt;getLicenseByShortName($license);\n" +
    "        if($l != NULL)\n" +
    "        {\n" +
    "            $this-&gt;dbManeger-&gt;insertTableRow('license_file',['agent_fk' =&gt; $agentId,'pfile_fk' =&gt; $pfileId,'rf_fk'=&gt; $l-&gt;getId()]);\n" +
    "        }\n" +
    "    }\n" +
    "    return true;\n" +
    "}</code></pre>\n" +
    "<h3>Registering the agent and Basic View</h3>\n" +
    "<p>The agent is being registered using the Agent plugin method as done in the previous agents. Through the <code>agent-shagent.php</code> the agent is getting registered and the same is getting reflected in the User Interface. The basic view is being shown in the <code>license listing</code> pages, <code>file-browser</code> pages. </p>\n" +
    "<h4>Commits</h4>\n" +
    "</li>\n" +
    "<li><a href=\"https://github.com/fossology/fossology/pull/1401/commits/63cfa71ecd231b71585f4fab2959065b7a0e0dfb\">#63cfa7</a> <code>feat(software-heritage): Create a software heritage agent and add the functionality</code></li>\n" +
    "<li><a href=\"https://github.com/fossology/fossology/pull/1401/commits/b807e4495356061b753918bb67cf25a724635182\">#b807e4</a> <code>feat(db): Make table of software heritage to store information</code></li>\n" +
    "<li><a href=\"https://github.com/fossology/fossology/pull/1401/commits/38f51a2a869b9d869a3f23318bcdffeda5a909db\">#38f51a</a> <code>feat(software-heritage): Make the ui section of software heritage and register the agent</code></li>\n" +
    "<li><a href=\"https://github.com/fossology/fossology/pull/1401/commits/b9c1fc2b45079222bc287f0656d0a034d7e19876\">#b9c1fc</a> <code>feat(software-heritage): Make softwareHeritage dao function and add all the functionality related software_heritage table to it</code></li>\n" +
    "<li><a href=\"https://github.com/fossology/fossology/pull/1401/commits/da4806754b0da6acdc25dfbdf73a6fcb19cd9ab8\">#da4806</a> <code>feat(softwareHeritageView): Show the details of software heritage in the license list page</code>\n" +
    "<h2>Displaying the Records</h2>\n" +
    "<p>I was working on this section during my third evaluation. We decided to have a separate view for the data under <code>software_heritage</code> section. The basic idea what we have got to display the result like a tabular view like we were doing in the <code>file-browser</code> section. The development process of the section includes two steps:-</p></li>\n" +
    "<li>creating the backend file structure</li>\n" +
    "<li>creating the frontend file structure  </li>\n" +
    "</ul>\n" +
    "<p>In the backend file structure, there were two files(<code>softwareHeritage-plugin.php</code> and <code>AjaxSHDetailsBrowser.php</code>). <code>softwareHeritagePlugin</code> is the basic request handlers which calculate basic frontend details like registering the menu, Getting the total number of records in a package, etc. Whereas the <code>AjaxSHDetailsBrowser</code> is an API which returns the file tree view along with hash value for each file and license details of each file. The <code>softwareHeritage.html.twig</code> display the records whereas <code>softwareHeritage.js.twig</code> calls the API and fill the table contains with the help of datatable.js.</p>\n" +
    "<h4>Commits</h4>\n" +
    "<ul>\n" +
    "<li><a href=\"https://github.com/fossology/fossology/commit/1fca099c677d772de37264cc34889768d47df6e8\">#1fca099</a> <code>feat(softwareHeritage): Make the view for softwareHeritage records for a package</code>\n" +
    "<h2>views</h2>\n" +
    "<p><strong>Add Software Heritage Agent</strong>\n" +
    "<img src=\"https://i.ibb.co/Cvm76Qj/Screenshot-from-2019-07-23-19-01-39.png\" alt=\"Sh agent\">\n" +
    "<img src=\"https://i.ibb.co/ngTtvRR/Screenshot-from-2019-07-23-19-02-16.png\" alt=\"software heritage Agent\"></p></li>\n" +
    "</ul>\n" +
    "<p><strong>Software Heritage Table</strong>\n" +
    "<img src=\"https://i.ibb.co/Dt21CGW/Screenshot-from-2019-08-17-16-48-34.png\" alt=\"SH table\"><br>\n" +
    "<strong>License List Page</strong>\n" +
    "<img src=\"https://i.ibb.co/jz66Ptv/Screenshot-from-2019-07-23-19-02-58.png\" alt=\"License Table\"><br>\n" +
    "<strong>File Info Page</strong>\n" +
    "<img src=\"https://i.ibb.co/SsdqsDT/Screenshot-from-2019-07-23-18-50-08.png\" alt=\"File Info\">  </p>\n" +
    "<h2>Additional Contribution</h2>\n" +
    "<p>Apart from the main deliverables above, I also contributed a few other patches.</p>\n" +
    "<ul>\n" +
    "<li><a href=\"https://github.com/fossology/fossology/commit/e304e4e39cfd2ef465845321e2226963e5a1d81b\">#e304e4</a> <code>fix(vscode): Add vscode editor file to gitignore</code></li>\n" +
    "<li><a href=\"https://github.com/fossology/fossology/commit/e514dc6d9f316bec6e25c41ba988848fc8599dca\">#e514dc</a> <code>feat(ui):Add user description of available user in group management page</code>\n" +
    "<h1>Conclusion</h1>\n" +
    "<p>What tasks were accomplished</p></li>\n" +
    "</ul>\n" +
    "<table>\n" +
    "<thead>\n" +
    "<tr>\n" +
    "<th style=\"text-align: right;\">Task</th>\n" +
    "<th style=\"text-align: right;\">Planned</th>\n" +
    "<th style=\"text-align: right;\">Completed</th>\n" +
    "</tr>\n" +
    "</thead>\n" +
    "<tbody>\n" +
    "<tr>\n" +
    "<td style=\"text-align: right;\">Calculate the SHA256 value of the files of a package</td>\n" +
    "<td style=\"text-align: right;\">yes</td>\n" +
    "<td style=\"text-align: right;\">yes</td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "<td style=\"text-align: right;\">Make the migration file to insert sha256 for previous files</td>\n" +
    "<td style=\"text-align: right;\">yes</td>\n" +
    "<td style=\"text-align: right;\">yes</td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "<td style=\"text-align: right;\">Create the software heritage agent</td>\n" +
    "<td style=\"text-align: right;\">yes</td>\n" +
    "<td style=\"text-align: right;\">yes</td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "<td style=\"text-align: right;\">Create a database table for software heritage details</td>\n" +
    "<td style=\"text-align: right;\">yes</td>\n" +
    "<td style=\"text-align: right;\">yes</td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "<td style=\"text-align: right;\">Register the agent</td>\n" +
    "<td style=\"text-align: right;\">yes</td>\n" +
    "<td style=\"text-align: right;\">yes</td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "<td style=\"text-align: right;\">Run the Agent</td>\n" +
    "<td style=\"text-align: right;\">yes</td>\n" +
    "<td style=\"text-align: right;\">yes</td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "<td style=\"text-align: right;\">Redundancy check of the details</td>\n" +
    "<td style=\"text-align: right;\">yes</td>\n" +
    "<td style=\"text-align: right;\">yes</td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "<td style=\"text-align: right;\">Store the details in software heritage table</td>\n" +
    "<td style=\"text-align: right;\">yes</td>\n" +
    "<td style=\"text-align: right;\">yes</td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "<td style=\"text-align: right;\">Store the license details in license_file table</td>\n" +
    "<td style=\"text-align: right;\">no</td>\n" +
    "<td style=\"text-align: right;\">yes</td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "<td style=\"text-align: right;\">Display the details fetched from software heritage</td>\n" +
    "<td style=\"text-align: right;\">yes</td>\n" +
    "<td style=\"text-align: right;\">yes</td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "<h1>Future Work</h1>\n" +
    "<p>Currently, we are not getting the origin value from the software heritage archive. When the software heritage archive makes that data public we need to add that section right after. The work involves adding the api and adding the same functionality.</p>\n" +
    "<h1>What did I learn from Google Summer of Code</h1>\n" +
    "<p>During my whole time period in Google Summer of Code, I have learned so many things such as:</p>\n" +
    "<ul>\n" +
    "<li>Understanding the code base of Fossology</li>\n" +
    "<li>Exploring new features of Php and C while working on the various features.</li>\n" +
    "<li>Along with I have learned how to create one agent and working with databases in fossology application.</li>\n" +
    "<li>I have learned a new feature of handling user interface feature in fossology</li>\n" +
    "<li>My approach to solving a problem is also improved.</li>\n" +
    "<li>I have sharpened my knowledge on debugging and error correction process</li>\n" +
    "</ul>\n" +
    "                            <p></p>";


module.exports.createDummyPost = (requiredPost) => {
    let counter = 1;
    let res = [];
    for(let i = 0; i < requiredPost; i++) {
        let temp = {
                id: counter,
                header: "Post Header is a good header",
                description: "this is a good post you should get to read it",
                content: "The post is good to be at the first place. How are you, how are you reading the post I dont know. I think you are stupid",
                createdAt: "2020-10-19 23:54:09"
            }
            res.push(temp);
            counter++;
    }
    return res;
}

module.exports.creatShortNotes = (requiredNotes) => {
    let counter = 1;
    let res = [];
    for(let i = 0; i < requiredNotes; i++) {
        let temp = {
            id: counter,
            content: 'Dummy note Dummy note and dummy note'
        }
        res.push(temp);
        counter++;
    }
    return res;
}