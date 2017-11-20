PrefixCommons is a cross cutting effort started by members of the Monarch Initiative and BD2K

It integrates available information about various web identifier schemes in the life-sciences, with the aim of making this information machine actionable and human searchable by anyone for any reason.

Other great platforms exist for resolution and registration of prefixes. We are aiming to harmonize, not compete with them.

The mission of PrefixCommons is thus *not* to dictate to any community what a prefix should or should not be; that is the responsibility of the primary registries relevant in those contexts. We are just coalescing and surfacing what the circulating prefixes and URIs are that are already in use -- are in all of their ugliness with regard to both collisions (many authorities to one prefix) and scatter (many prefixes for one authority). Our goal is to integrate data bout prefixes from more than 15 registries [here](https://docs.google.com/spreadsheets/d/1cDGJcRteb9F5-jbw7Q7np0kk4hfWhdBHNYRIg3LXDrs/edit#gid=0). The lion's share of the prefixes and resolution paths that are of greatest interest to us in biomedical domain have been sourced from identifiers.org's curated registry.

A very light weight demonstrator of the integrated prefix metadata corpus is here: http://prefixcommons.org More information and code to follow. An update of the data in http://prefixcommons.org has not been done since 2016. However, the prefix ping service fetches data in realtime about whether and where a prefix has previously been registered.

Eg. 

to query 'go':
- https://beta.monarchinitiative.org/ping/prefix/go

to query 'foo':
- https://beta.monarchinitiative.org/ping/prefix/foo

Note that this ping service does not currently expose two different prefixes for the same resource.
