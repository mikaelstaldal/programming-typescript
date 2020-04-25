export default null; // Force module mode

// Sid 150-151 - returning null

function format(n: number): string | null {
  if (n == 0) return null;
  else return n.toString();
}

const x: string = format(0) ?? "";
console.log(`x: '${x}'`);

const y: string = format(1) ?? "";
console.log(`x: '${y}'`);

function foo(n: number) {
  const s = format(n);
  if (!s) return;
  bar(s);
}

function bar(s: string) {
  console.log(`s: '${s}'`);
}

foo(0);
foo(17);

function parseIntegerNull(s: string): number | null {
  const p = parseInt(s);
  if (isNaN(p)) return null;
  else return p;
}

// const ss = parse(format(17)); går inte, skulle gå med Option.flatMap()

// Sid 161-163 - throwing exceptions

class NumberFormatError extends RangeError {}

function parseIntegerThrow(s: string): number {
  const p = parseInt(s);
  if (isNaN(p)) throw new NumberFormatError(s);
  else return p;
}

function throwingException(s: string) {
  try {
    const num = parseIntegerThrow(s);
    console.log(`throwingException: ${format(num)}`);
  } catch (e) {
    if (e instanceof NumberFormatError) {
      console.log(`throwingException fel: ${e.message}`);
    } else {
      throw e;
    }
  }
}

throwingException("17");
throwingException("foo");

// Sid 163-165 - returning exceptions

function parseIntegerReturn(s: string): number | NumberFormatError {
  const p = parseInt(s);
  if (isNaN(p)) return new NumberFormatError(s);
  else return p;
}

function returningException(s: string) {
  const num = parseIntegerReturn(s);
  if (num instanceof NumberFormatError) {
    console.log(`returningException fel: ${num.message}`);
    return;
  }
  console.log(`returningException: ${format(num)}`);
}

returningException("17");
returningException("foo");

// Sid 165-171 - the Option type

// Inte bra eftersom det inte är standard (som i Scala, Haskell eller i viss mån i Java 8+)

// Exercise 1

class DatabaseError extends Error {}

type UserID = string;

interface API {
  /**
   * @return null if no user is logged in
   */
  getLoggedInUserID(): UserID | null;

  /**
   * @throws DatabaseError if user database is unavailable
   */
  getFriendIDs(userID: UserID): UserID[];

  /**
   * @throws DatabaseError if user database is unavailable
   */
  getUserName(userID: UserID): string;
}
