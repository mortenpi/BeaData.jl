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
    "text": "All requests to the BEA API currently throw an HTTP Parser Exception, though this does not prevent the requested query from being completed successfully as long as valid arguments are provided to the functions.  This appears not to be a client-side issue, caused instead (as far as I've been able to determine) by some superfluous data returned by the BEA server – a similar error occurs when using R."
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
    "text": "Download a NIPA table using the get_nipa_table method:   mytable = get_nipa_table(b::Bea, TableID::Int, frequency::AbstractString,\n        startyear::Int, endyear::Int)Arguments:b\n: a BEA API connection\nTableID\n: the integer Table ID for the desired NIPA table (see \"NIPA Table IDs\" below)\nfrequency\n: \"A\" for annual, \"Q\" for quarerly\nstartyear\n: first year of data requested, in YYYY format\nendyear\n: last year of data requested, in YYYY formatThe method returns an object of type BeaNipaTable, with the following fields:tablenum\n: Table number\ntableid\n: Table ID\ntabledesc\n: Table description\nlinedesc\n: an \nOrderedDict\n with table line numbers and the corresponding variable descriptions\ntablenotes\n: an \nOrderedDict\n with any notes to the table\nfrequency\nstartyear\nendyear\ndf\n: a \nDataFrame\n containing the data values; column names are the line numbers from the table (see \"NIPA Table line numbers\" below)"
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
    "text": "The data frame returned by a call to the API has dates in the first column and the table data in the remaining columns.  Data columns are named for the corresponding line numbers of the NIPA table.  Once a table has been retrieved, the function    table_metadata_tex(bnt::BeaNipaTable)will write a .tex file to the current working directory that contains the table name and description, line numbers and descriptions, and table notes."
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
    "text": "A connection to the U.S. Bureau of Economic Analysis (BEA) Data API.\n\nConstructors\n\nBea()\nBea(key::AbstractString)\n\nArguments\n\nkey\n: Registration key provided by the BEA.\n\nA valid registration key is \nrequired\n to retrieve data from the BEA's API.   A key can be obtained by registering at the BEA website.\n\nA default API key can be specified in a ~/.beadatarc file.\n\nMethods\n\napi_url(b::Bls)\n: Get the base URL used to connect to the server\napi_key(b::Bls)\n: Get the API key\n\n\n\n"
},

{
    "location": "lib/public.html#BeaData.BeaNipaTable",
    "page": "Commands",
    "title": "BeaData.BeaNipaTable",
    "category": "Type",
    "text": "A NIPA table with data and metadata returned from a get_nipa_table call.\n\nFields\n\ntablenum::AbstractString\n: NIPA table number\ntableid::Int\n: API TableID\ntabledesc::AbstractString\n: The table title (e.g., \"Real Gross Domestic Product,  Chained Dollars\" for Table 1.1.6)\nlinedesc::OrderedDict\n: Dictionary of descriptions for each line of the table\ntablenotes::Any\n: Table notes, if any\nfrequency::AbstractString\n: \"A\" or \"Q\"\nstartyear::Int\nendyear::Int\ndf::DataFrame\n: the data values from the table; column names are the line numbers from the table, the first column contains the date for each observation in Julia \nDate\n format\n\n\n\n"
},

{
    "location": "lib/public.html#BeaData.get_nipa_table-Tuple{BeaData.Bea,Int64,AbstractString,Int64,Int64}",
    "page": "Commands",
    "title": "BeaData.get_nipa_table",
    "category": "Method",
    "text": "get_nipa_table(b::Bea, TableID::Int, frequency::AbstractString,\n    startyear::Int, endyear::Int)\n\nRequest a NIPA table from the BEA data API.\n\nArguments\n\nb\n: a BEA API connection\nTableID\n: the integer Table ID for the desired NIPA table\nfrequency\n: \"A\" for annual, \"Q\" for quarerly\nstartyear\n: first year of data requested, in YYYY format\nendyear\n: last year of data requested, in YYYY format\n\nReturns\n\nAn object of type \nBeaNipaTable\n\n\n\n"
},

{
    "location": "lib/public.html#BeaData.nipa_metadata_tex-Tuple{BeaData.Bea}",
    "page": "Commands",
    "title": "BeaData.nipa_metadata_tex",
    "category": "Method",
    "text": "nipa_metadata_tex(b::Bea)\n\nArguments\n\nb\n: a BEA API connection\n\nReturns\n\nA .tex file with the parmater list for the NIPA dataset and parameter values for the TableID parameter.  The file is written to the curent working directory.\n\n\n\n"
},

{
    "location": "lib/public.html#BeaData.table_metadata_tex-Tuple{BeaData.BeaNipaTable}",
    "page": "Commands",
    "title": "BeaData.table_metadata_tex",
    "category": "Method",
    "text": "table_metadata_tex(bnt::BeaNipaTable)\n\nArguments\n\nbnt\n: a BEA NIPA Table object\n\nReturns\n\nA .tex file with metadata (table name and description, line numbers and descriptions, and table notes) for a NIPA table.  The file is written to the curent working directory.\n\n\n\n"
},

{
    "location": "lib/public.html#Index-1",
    "page": "Commands",
    "title": "Index",
    "category": "section",
    "text": "Pages = [\"public.md\"]Modules = [BeaData]"
},

]}
