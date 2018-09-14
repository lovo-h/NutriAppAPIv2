# API Map


### Get Food Items' Names

**URL**: `/api/long_descs/<regex("[a-zA-Z0-9&]{3,200}"):snippet>`

**Method**: `GET`

**Success Response**:

| Description | Content |
| --- | --- |
| Code | `200` |
| Content | `{"data": [{"ndb_no": string(5), "long_desc": string(200), "fdgrp_cd": string(4), "fdgrp_desc": string(60)}]}`|

**Error Response**:

| Description | Content |
| --- |---|
| Code | `500` |
| Content | `None` |

### Get Food Item

**URL**: `/api/foods/<regex("[0-9]{5}"):ndb_no>`

**Method**: `GET`

**Success Response**:

| Description | Content |
| --- | --- |
| Code | `200` |
| Content | `{"data": [{"ndb_no": string(5), "nutr_no": string(3), "nutr_val": float(10,3), "units": string(7), "nutrdesc": string(60)}]}`|

**Error Response**:

| Description | Content |
| --- |---|
| Code | `500` |
| Content | `None` |