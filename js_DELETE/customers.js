---
---
phploep_jsonp_callback([
{% for customer in site.data.customers -%}  {
    "name": "{{ customer.name }}",
    "repo": "{{ customer.repo }}",
    "website": "{{ customer.website }}",
    "description": "{{ customer.description }}",
    "lead": {
      "name": "{{ customer.lead.name }}",
      "username": "{{ customer.lead.username }}"
    }
  }{% unless forloop.last %},{% endunless %}
{% endfor %}])
