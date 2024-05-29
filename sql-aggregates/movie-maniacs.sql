  select "c"."firstName",
        "c"."lastName",
        sum("amount") as "totalSpent"
    from "customers" as "c"
    join "payments" using ("customerId")
    group by "customerId"
    order by "totalSpent" desc
