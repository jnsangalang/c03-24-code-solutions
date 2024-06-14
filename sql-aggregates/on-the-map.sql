  select count(*) as "numberOfCities",
        "c"."name"
    from "cities"
    join "countries" as "c" using ("countryId")
    group by "c"."countryId"
