import 'temporal-polyfill/global';

console.log(Temporal.Now.instant().toString());
console.log(Math.floor(Temporal.Now.instant().epochMilliseconds / 1000)); // секунды
console.log(Temporal.Now.timeZoneId());
console.log(Temporal.Now.zonedDateTimeISO().toString());

const date = new Date();
const instant = date.toTemporalInstant();
console.log(instant.toString())

const t1 = Temporal.Instant.from('2025-01-01T10:00:00+01:00')
const t2 = Temporal.Instant.from('2025-02-01T10:00:00+01:00[Europe/London]')
const t3 = Temporal.Instant.fromEpochMilliseconds(10e8);

const res = new Temporal.ZonedDateTime(
    Temporal.Now.instant().epochNanoseconds,
    'Europe/London',
    'iso8601'
)

console.log(res.toString());
console.log(Temporal.PlainDateTime.from('2024-04-18').toString());
console.log(Temporal.PlainDateTime.from('2024-04-18').dayOfWeek);
console.log(Temporal.PlainDateTime.from('2024-04-18').day);
console.log(Temporal.PlainDateTime.from('2024-04-18').dayOfYear);

console.log(res.add({
    days: 1,
    months: 1,
}).subtract({
    weeks: 1
}).toString());

console.log(Temporal.Instant.compare(t1, t2));
res.equals(res.equals(res))