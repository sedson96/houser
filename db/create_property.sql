INSERT INTO property (name, address, city, state, zip, img_url, mortgage, rent)
VALUES ($1,$2,$3,$4,$5,$6,$7,$8);

SELECT * FROM property ORDER BY id;