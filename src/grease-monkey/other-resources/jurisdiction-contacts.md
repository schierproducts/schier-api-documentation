---
description: Expected response information from the Jurisdiction Contact data type
auth: true
---

# Jurisdiction Contacts

This object references a jurisdiction (AHJ) point-of-contact that a Schier Admin can reference during the sizing process. Various pieces of information regarding their contact information and their position can be provided here.

## The Jurisdiction Contact Object

```json
{
  "id": 962,
  "name": "Rick *****",
  "first_name": "Rick",
  "last_name": "*****",
  "title": "Plumbing Plans Review",
  "email": "*****@richmondgov.com",
  "primary_phone_number": "*****",
  "department": "Plumbing Plans Review",
  "jurisdictions": [
    "Plumbing Plans Review"
  ],
  "jurisdiction_name": "Richmond, VA",
  "facility": {
    "name": "City of Richmond VA Building Dept.",
    "address": "900 East Broad Street",
    "city": "Richmond",
    "state": "VA",
    "postal_code": "23219",
    "county": null
  },
  "is_primary_contact": false
}
```

### Attributes

`is_primary_contact` <span class="code-note">boolean</span>

If this contact has been identified as Schier's main point of contact for this jurisdiction.