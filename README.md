# Kaizen Nuxt Starter

Just a simple base Nuxt3 app that comes with the stuff I like to use. Not actively
maintained for the public, but free to use if you wish.

- Need to install the DB driver manually from drizzle
- Update db folder configs to suite your driver
- Update migration scripts in package.json


```sh
bunx nuxi init -t gh:Eckhardt-D/kaizen-nuxt-starter
```

# Adding a db driver

See: https://orm.drizzle.team/docs/quick-mysql/mysql2/

e.g.

```sh
bun add mysql2
```

then update `db/` and migration scripts according to Drizzle docs
