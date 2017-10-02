This is a list of real-world identifier issues encountered; it aims to be representative rather than exhaustive. 
This list could be used to 
* Convince funders of the problem
* Provide a set of references for a paper or specification
* See what can be done to improve informatics/tooling around identifiers
 
We warmly welcome anyone to contribute.

Reported by | Reported about | Problems referenced | Problem category
------|-----|----|----
[EBI-Ontology Lookup Service (OLS)](https://github.com/EBISPOT/OLS/issues/50#issuecomment-188312663)| various ontologies | underscore delimited vs colon-delimited forms, case sensitivity | search, delimiters
Not clear | [Darwin Core Triples](https://docs.google.com/spreadsheets/d/1IoyLuuJvmGhma-cGlmjIQKs65qq-YEXWiZNc1lZen_c/edit#gid=0) | institutional code collisions amongst darwin core triples | collisions, institution identifiers
PrefixCommons | [NCBI](https://docs.google.com/spreadsheets/d/1OCJuB5obyKsOY-_Fc9-QTj2m1KTiGfEien5NxQyGFAQ/edit#gid=19403651) | number of shortform and http URI permutations found in the wild for a single identifier in NCBI gene | data integration, text mining
[General (wikipedia entry)](https://en.wikipedia.org/wiki/URL_normalization) | Web-at-large | 17 different ways in which URLs could be determined to be equivalent; some of these are lossy | data integration
[biostars](https://www.biostars.org/p/164441/)| HGNC | Mapping between similar entities across databases | mapping
[Human Phenotype Ontology](https://github.com/monarch-initiative/hpo-annotation-data/issues/101) |OMIM|Prefix heterogeneity OMIM vs MIM. Have to build special processors to collapse them | prefix variation, data integration
[Monarch Initiative](https://github.com/monarch-initiative/dipper/issues/158) | TAIR| TAIR prefix variation difficult to resolve | type-specificity
Stian |[EU grants](https://twitter.com/soilandreyes/status/715179029947686914) |No obvious documentation for permalinks in EU grants, nor any correlation between destination URL and project ID | documentation
[H pylori paper](http://journals.iucr.org/f/issues/2016/04/00/hv9323/index.html)|HP Protein identifiers | Naming problems that result from embedded meaning in identifiers and evolving scientific knowledge. | Embedded meaning
PrefixCommons | [HGNC](https://github.com/prefixcommons/operations/issues/19) | co-occuring identifier complexities in HGNC (multiple entity types, multiple identifier types, prefixed/unprefixed versions, type-specific URLs without type-specific determinism in local IDs)|type-specificity
[WebProNews](http://www.webpronews.com/ebay-improves-search-product-identifiers-2016-04/)|EBAY|need for location-independent ids|data integration
PrefixCommons|[ZENODO](https://zenodo.org/record/31765#.VyJbvaODGko) | No rollup to impact for all DOI versions | DOI versions
Monarch Initiative | [Monarch's ingest of FlyBase](https://github.com/monarch-initiative/dipper/pull/312) | Faulty ingest process resulted in fly and human genes being considered equivalents instead of orthologs. | Data integration
Monarch Initiative | [EBI-OLS](https://github.com/EBISPOT/OLS/issues/93) | Tricky to support searches of identifiers because of standard query-parsing behavior of solr.| Data applications
[Ziemann et al](http://genomebiology.biomedcentral.com/articles/10.1186/s13059-016-1044-7) | Several journals | Gene name corruption in supplementary data affects 20% of papers | Data quality
[D. Natale](http://orcid.org/0000-0001-5809-9523) | NCBI's Gene database | Large number of identifiers went stale for strains declared "out of scope" or other reasons. In some cases no alternative is offered. Example 1 https://www.ncbi.nlm.nih.gov/gene/?term=5203950. Example 2 https://www.ncbi.nlm.nih.gov/gene/?term=1165308 | data stability
Monarch Initiative | [Massive DB](http://massive.ucsd.edu) | hashed links like http://massive.ucsd.edu/ProteoSAFe/result.jsp?task=f847302a49e34ab89ebf3ecc2250be96&view=advanced_view, especially when surrounded by a lot of implementation-specific cruft, do not inspire confidence. They appear even as though they may be session-specific. There are local IDs that are supported in more deterministic URIs; however these are virtually unfindable except through trial and error: eg. https://gnps.ucsd.edu/ProteoSAFe/dataset_id_redirect.jsp?massiveid=MSV000079621 | persistence, documentation
[Monarch Initiative](http://monarchinitiative.org) | Incoming links | Other sites are linking to us but in ways that have different conventions about leading zeros, eg.  https://monarchinitiative.org/disease/DOID:0050202 isn't correctly formed and leads to 404.  | persistence, integration

