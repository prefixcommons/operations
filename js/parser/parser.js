/**
 * Created by mcmurry on 11/19/15.
 */
d3.tsv(filename, function(error, data) {
    data.forEach(function(d) {
        d.date = parseDate(d.date);
        d.outside = +d.outside;
        d.house = +d.house;
});
