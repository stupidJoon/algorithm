const d = new Intl.DateTimeFormat('fr-CA', {
  month:'2-digit',
  day:'2-digit',
  year:'numeric'
}).format(new Date());

console.log(d);
