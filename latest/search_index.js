var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#BeaData.jl-1",
    "page": "Home",
    "title": "BeaData.jl",
    "category": "section",
    "text": "A Julia interface for retrieving data from the U.S. Bureau of Economic Analysis (BEA) Data API."
},

{
    "location": "index.html#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "At the Julia REPL:    Pkg.add(\"BeaData\")"
},

{
    "location": "index.html#Usage-1",
    "page": "Home",
    "title": "Usage",
    "category": "section",
    "text": "See the Package Guide."
},

{
    "location": "index.html#Known-Issue-1",
    "page": "Home",
    "title": "Known Issue",
    "category": "section",
    "text": "All requests by BeaData.jl to the BEA API currently throw an HTTP Parser Exception, though this does not prevent the requested query from being completed successfully as long as valid arguments are provided to the functions.  This is not a client-side issue, caused instead by an extra space character returned by the BEA server's response (thanks to  @quinnj - Jacob Quinn - for figuring this out).  This will be fixed in a future update."
},

{
    "location": "index.html#Index-1",
    "page": "Home",
    "title": "Index",
    "category": "section",
    "text": "Pages = [\"lib/public.md\"]"
},

{
    "location": "man/guide.html#",
    "page": "Guide",
    "title": "Guide",
    "category": "page",
    "text": ""
},

{
    "location": "man/guide.html#Package-Guide-1",
    "page": "Guide",
    "title": "Package Guide",
    "category": "section",
    "text": "For now, the package only retrieves full tables from the standard National Income and Product Accounts (NIPA) (i.e., no downloads of single data series or     from other datasets such as the International Transactions Accounts)."
},

{
    "location": "man/guide.html#Initialize-a-connection-1",
    "page": "Guide",
    "title": "Initialize a connection",
    "category": "section",
    "text": "Initialize a connection to the BEA API:   b = Bea(\"your-36-character-registration-key\")Alternatively, you can save your key in the file ~/.beadatarc and call the constructor with no argument:    b = Bea()"
},

{
    "location": "man/guide.html#Retrieve-a-table-1",
    "page": "Guide",
    "title": "Retrieve a table",
    "category": "section",
    "text": "Download a NIPA table using the get_nipa_table method:   mytable = get_nipa_table(b::Bea, TableID::Int, frequency::AbstractString,\n        startyear::Int, endyear::Int)Arguments:b: a Bea connection\nTableID: the integer Table ID for the desired NIPA table (see \"NIPA Table IDs\" below)\nfrequency: \"A\" for annual, \"Q\" for quarerly\nstartyear: first year of data requested, in YYYY format\nendyear: last year of data requested, in YYYY formatThe method returns an object of type BeaNipaTable, with the following fields:tablenum: Table number\ntableid: Table ID\ntabledesc: Table description\nlinedesc: an OrderedDict with table line numbers and the corresponding variable descriptions\ntablenotes: an OrderedDict with any notes to the table\nfrequency\nstartyear\nendyear\ndf: a DataFrame containing the data values; column names are the line numbers from the table (see \"NIPA Table line numbers\" below)"
},

{
    "location": "man/guide.html#NIPA-Table-IDs-1",
    "page": "Guide",
    "title": "NIPA Table IDs",
    "category": "section",
    "text": "The TableIDs necessary to retrieve data from the API are not the same as the NIPA table numbers, and they are not listed anywhere (that I've found) on the BEA's website. I've provided a function that will retrieve the full list of TableID values and their corresponding table numbers and descriptions and write them to a .tex file.Once a BEA API connection has been initialized, the function    nipa_metadata_tex(b::Bea)will write a file named \"NipaMetadata.tex\" to the current working directory."
},

{
    "location": "man/guide.html#NIPA-Table-line-numbers-1",
    "page": "Guide",
    "title": "NIPA Table line numbers",
    "category": "section",
    "text": "The DataFrame returned by a call to the API has dates in the first column and the table data in the remaining columns.  Data columns are named for the corresponding line numbers of the NIPA table (e.g., :line1, :line2, etc.).  Once a table has been retrieved, the function    table_metadata_tex(bnt::BeaNipaTable)will write a .tex file to the current working directory that contains the table name and description, line numbers and descriptions, and table notes."
},

{
    "location": "lib/public.html#",
    "page": "Commands",
    "title": "Commands",
    "category": "page",
    "text": ""
},

{
    "location": "lib/public.html#Command-Documentation-1",
    "page": "Commands",
    "title": "Command Documentation",
    "category": "section",
    "text": ""
},

{
    "location": "lib/public.html#BeaData.Bea",
    "page": "Commands",
    "title": "BeaData.Bea",
    "category": "Type",
    "text": "type Bea\n\nA connection to the U.S. Bureau of Economic Analysis (BEA) Data API.\n\nConstructors\n\nBea()\nBea(key::AbstractString)\n\nArguments\n\nkey: Registration key provided by the BEA.\n\nA valid registration key is required to retrieve data from the BEA's API.  A key can be obtained by registering at the BEA website.\n\nA default API key can be specified in a ~/.beadatarc file.\n\nFields\n\nurl\nkey\ndataset\n\n\n\n"
},

{
    "location": "lib/public.html#BeaData.BeaNipaTable",
    "page": "Commands",
    "title": "BeaData.BeaNipaTable",
    "category": "Type",
    "text": "type BeaNipaTable\n\nA NIPA table with data and metadata returned from a get_nipa_table call.\n\nFields\n\ntablenum - NIPA table number\ntableid - API TableID\ntabledesc - The table title (e.g., 'Real Gross Domestic Product, Chained Dollars' for Table 1.1.6)\nlinedesc - OrderedDict of descriptions for each line of the table\ntablenotes - Table notes, if any\nfrequency\nstartyear\nendyear\ndf - DataFrame containing the data values from the table; column names are the line numbers from the table, the first column contains the date for each observation in Julia Date format\n\n\n\n"
},

{
    "location": "lib/public.html#BeaData.get_bea_datasets-Tuple{BeaData.Bea}",
    "page": "Commands",
    "title": "BeaData.get_bea_datasets",
    "category": "Method",
    "text": "get_bea_datasets(b)\n\n\nReturn, in a DataFrame, a list of IDs and descriptions for datasets accessible from the BEA data API.\n\nArguments\n\nb – a Bea connection\n\n\n\n"
},

{
    "location": "lib/public.html#BeaData.get_bea_parameterlist-Tuple{BeaData.Bea,String}",
    "page": "Commands",
    "title": "BeaData.get_bea_parameterlist",
    "category": "Method",
    "text": "get_bea_parameterlist(b, dataset)\n\n\nReturn, in a DataFrame, a list of parameters for dataset.\n\nArguments\n\nb – a Bea connection\ndataset – String indicating the dataset ID.\n\nReturns\n\nA DataFrame listing the following:\n\nParameter ID\nParmameter description\nrequired – 1 for yes, 0 for no\ndefault_value – empty if none\n\n\n\n"
},

{
    "location": "lib/public.html#BeaData.get_nipa_table-Tuple{BeaData.Bea,Int64,AbstractString,Int64,Int64}",
    "page": "Commands",
    "title": "BeaData.get_nipa_table",
    "category": "Method",
    "text": "get_nipa_table(b, TableID, frequency, startyear, endyear)\n\n\nRequest a NIPA table from the BEA data API and return an object of type BeaNipaTable.\n\nArguments\n\nb – a Bea connection\nTableID – the integer Table ID for the desired NIPA table\nfrequency – \"A\" for annual, \"Q\" for quarerly\nstartyear – first year of data requested, in YYYY format\nendyear – last year of data requested, in YYYY format\n\n\n\n"
},

{
    "location": "lib/public.html#BeaData.nipa_metadata_tex-Tuple{BeaData.Bea}",
    "page": "Commands",
    "title": "BeaData.nipa_metadata_tex",
    "category": "Method",
    "text": "nipa_metadata_tex(b)\n\n\nWrite, to the current working directory, a .tex file with the parmater list for the NIPA dataset and parameter values for the TableID parameter.\n\nArguments\n\nb – a Bea connection\n\n\n\n"
},

{
    "location": "lib/public.html#BeaData.table_metadata_tex-Tuple{BeaData.BeaNipaTable}",
    "page": "Commands",
    "title": "BeaData.table_metadata_tex",
    "category": "Method",
    "text": "table_metadata_tex(bnt)\n\n\nWrite, to the current working directory, a .tex file with metadata (table name and description, line numbers and descriptions, and table notes) for the NIPA table contained in bnt.\n\nArguments\n\nbnt – a BeaNipaTable object\n\n\n\n"
},

{
    "location": "lib/public.html#BeaData.parse_data_dict-Tuple{Dict}",
    "page": "Commands",
    "title": "BeaData.parse_data_dict",
    "category": "Method",
    "text": "parse_data_dict(dict)\n\n\nExtract information for a single observation and return as a tuple.  (Internal method for get_nipa_table.)\n\n\n\n"
},

{
    "location": "lib/public.html#Index-1",
    "page": "Commands",
    "title": "Index",
    "category": "section",
    "text": "Pages = [\"public.md\"]Modules = [BeaData]"
},

]}
