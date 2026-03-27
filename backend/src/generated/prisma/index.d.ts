
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>
/**
 * Model WeeklySummary
 * 
 */
export type WeeklySummary = $Result.DefaultSelection<Prisma.$WeeklySummaryPayload>
/**
 * Model SummaryStatBlock
 * 
 */
export type SummaryStatBlock = $Result.DefaultSelection<Prisma.$SummaryStatBlockPayload>
/**
 * Model IncidentRecord
 * 
 */
export type IncidentRecord = $Result.DefaultSelection<Prisma.$IncidentRecordPayload>
/**
 * Model Source
 * 
 */
export type Source = $Result.DefaultSelection<Prisma.$SourcePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SummaryStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED'
};

export type SummaryStatus = (typeof SummaryStatus)[keyof typeof SummaryStatus]

}

export type SummaryStatus = $Enums.SummaryStatus

export const SummaryStatus: typeof $Enums.SummaryStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AdminUsers
 * const adminUsers = await prisma.adminUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AdminUsers
   * const adminUsers = await prisma.adminUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weeklySummary`: Exposes CRUD operations for the **WeeklySummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeeklySummaries
    * const weeklySummaries = await prisma.weeklySummary.findMany()
    * ```
    */
  get weeklySummary(): Prisma.WeeklySummaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.summaryStatBlock`: Exposes CRUD operations for the **SummaryStatBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SummaryStatBlocks
    * const summaryStatBlocks = await prisma.summaryStatBlock.findMany()
    * ```
    */
  get summaryStatBlock(): Prisma.SummaryStatBlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incidentRecord`: Exposes CRUD operations for the **IncidentRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IncidentRecords
    * const incidentRecords = await prisma.incidentRecord.findMany()
    * ```
    */
  get incidentRecord(): Prisma.IncidentRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.source`: Exposes CRUD operations for the **Source** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sources
    * const sources = await prisma.source.findMany()
    * ```
    */
  get source(): Prisma.SourceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AdminUser: 'AdminUser',
    WeeklySummary: 'WeeklySummary',
    SummaryStatBlock: 'SummaryStatBlock',
    IncidentRecord: 'IncidentRecord',
    Source: 'Source'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "adminUser" | "weeklySummary" | "summaryStatBlock" | "incidentRecord" | "source"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
          }
        }
      }
      WeeklySummary: {
        payload: Prisma.$WeeklySummaryPayload<ExtArgs>
        fields: Prisma.WeeklySummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeeklySummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeeklySummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>
          }
          findFirst: {
            args: Prisma.WeeklySummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeeklySummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>
          }
          findMany: {
            args: Prisma.WeeklySummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>[]
          }
          create: {
            args: Prisma.WeeklySummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>
          }
          createMany: {
            args: Prisma.WeeklySummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeeklySummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>[]
          }
          delete: {
            args: Prisma.WeeklySummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>
          }
          update: {
            args: Prisma.WeeklySummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>
          }
          deleteMany: {
            args: Prisma.WeeklySummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeeklySummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeeklySummaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>[]
          }
          upsert: {
            args: Prisma.WeeklySummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>
          }
          aggregate: {
            args: Prisma.WeeklySummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeeklySummary>
          }
          groupBy: {
            args: Prisma.WeeklySummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeeklySummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeeklySummaryCountArgs<ExtArgs>
            result: $Utils.Optional<WeeklySummaryCountAggregateOutputType> | number
          }
        }
      }
      SummaryStatBlock: {
        payload: Prisma.$SummaryStatBlockPayload<ExtArgs>
        fields: Prisma.SummaryStatBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SummaryStatBlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryStatBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SummaryStatBlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryStatBlockPayload>
          }
          findFirst: {
            args: Prisma.SummaryStatBlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryStatBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SummaryStatBlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryStatBlockPayload>
          }
          findMany: {
            args: Prisma.SummaryStatBlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryStatBlockPayload>[]
          }
          create: {
            args: Prisma.SummaryStatBlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryStatBlockPayload>
          }
          createMany: {
            args: Prisma.SummaryStatBlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SummaryStatBlockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryStatBlockPayload>[]
          }
          delete: {
            args: Prisma.SummaryStatBlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryStatBlockPayload>
          }
          update: {
            args: Prisma.SummaryStatBlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryStatBlockPayload>
          }
          deleteMany: {
            args: Prisma.SummaryStatBlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SummaryStatBlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SummaryStatBlockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryStatBlockPayload>[]
          }
          upsert: {
            args: Prisma.SummaryStatBlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryStatBlockPayload>
          }
          aggregate: {
            args: Prisma.SummaryStatBlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSummaryStatBlock>
          }
          groupBy: {
            args: Prisma.SummaryStatBlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<SummaryStatBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.SummaryStatBlockCountArgs<ExtArgs>
            result: $Utils.Optional<SummaryStatBlockCountAggregateOutputType> | number
          }
        }
      }
      IncidentRecord: {
        payload: Prisma.$IncidentRecordPayload<ExtArgs>
        fields: Prisma.IncidentRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentRecordPayload>
          }
          findFirst: {
            args: Prisma.IncidentRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentRecordPayload>
          }
          findMany: {
            args: Prisma.IncidentRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentRecordPayload>[]
          }
          create: {
            args: Prisma.IncidentRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentRecordPayload>
          }
          createMany: {
            args: Prisma.IncidentRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncidentRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentRecordPayload>[]
          }
          delete: {
            args: Prisma.IncidentRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentRecordPayload>
          }
          update: {
            args: Prisma.IncidentRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentRecordPayload>
          }
          deleteMany: {
            args: Prisma.IncidentRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncidentRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentRecordPayload>[]
          }
          upsert: {
            args: Prisma.IncidentRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentRecordPayload>
          }
          aggregate: {
            args: Prisma.IncidentRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncidentRecord>
          }
          groupBy: {
            args: Prisma.IncidentRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncidentRecordCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentRecordCountAggregateOutputType> | number
          }
        }
      }
      Source: {
        payload: Prisma.$SourcePayload<ExtArgs>
        fields: Prisma.SourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          findFirst: {
            args: Prisma.SourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          findMany: {
            args: Prisma.SourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>[]
          }
          create: {
            args: Prisma.SourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          createMany: {
            args: Prisma.SourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>[]
          }
          delete: {
            args: Prisma.SourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          update: {
            args: Prisma.SourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          deleteMany: {
            args: Prisma.SourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>[]
          }
          upsert: {
            args: Prisma.SourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          aggregate: {
            args: Prisma.SourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSource>
          }
          groupBy: {
            args: Prisma.SourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SourceCountArgs<ExtArgs>
            result: $Utils.Optional<SourceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    adminUser?: AdminUserOmit
    weeklySummary?: WeeklySummaryOmit
    summaryStatBlock?: SummaryStatBlockOmit
    incidentRecord?: IncidentRecordOmit
    source?: SourceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type WeeklySummaryCountOutputType
   */

  export type WeeklySummaryCountOutputType = {
    statBlocks: number
    incidents: number
  }

  export type WeeklySummaryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statBlocks?: boolean | WeeklySummaryCountOutputTypeCountStatBlocksArgs
    incidents?: boolean | WeeklySummaryCountOutputTypeCountIncidentsArgs
  }

  // Custom InputTypes
  /**
   * WeeklySummaryCountOutputType without action
   */
  export type WeeklySummaryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummaryCountOutputType
     */
    select?: WeeklySummaryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WeeklySummaryCountOutputType without action
   */
  export type WeeklySummaryCountOutputTypeCountStatBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SummaryStatBlockWhereInput
  }

  /**
   * WeeklySummaryCountOutputType without action
   */
  export type WeeklySummaryCountOutputTypeCountIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentRecordWhereInput
  }


  /**
   * Count Type SourceCountOutputType
   */

  export type SourceCountOutputType = {
    incidents: number
  }

  export type SourceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incidents?: boolean | SourceCountOutputTypeCountIncidentsArgs
  }

  // Custom InputTypes
  /**
   * SourceCountOutputType without action
   */
  export type SourceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceCountOutputType
     */
    select?: SourceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SourceCountOutputType without action
   */
  export type SourceCountOutputTypeCountIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _avg: AdminUserAvgAggregateOutputType | null
    _sum: AdminUserSumAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminUserSumAggregateOutputType = {
    id: number | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminUserAvgAggregateInputType = {
    id?: true
  }

  export type AdminUserSumAggregateInputType = {
    id?: true
  }

  export type AdminUserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _avg?: AdminUserAvgAggregateInputType
    _sum?: AdminUserSumAggregateInputType
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: number
    email: string
    passwordHash: string
    createdAt: Date
    updatedAt: Date
    _count: AdminUserCountAggregateOutputType | null
    _avg: AdminUserAvgAggregateOutputType | null
    _sum: AdminUserSumAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "createdAt" | "updatedAt", ExtArgs["result"]["adminUser"]>

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      passwordHash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminUsers and returns the data saved in the database.
     * @param {AdminUserCreateManyAndReturnArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers and returns the data updated in the database.
     * @param {AdminUserUpdateManyAndReturnArgs} args - Arguments to update many AdminUsers.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminUser model
   */
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'Int'>
    readonly email: FieldRef<"AdminUser", 'String'>
    readonly passwordHash: FieldRef<"AdminUser", 'String'>
    readonly createdAt: FieldRef<"AdminUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
  }

  /**
   * AdminUser createManyAndReturn
   */
  export type AdminUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser updateManyAndReturn
   */
  export type AdminUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to delete.
     */
    limit?: number
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
  }


  /**
   * Model WeeklySummary
   */

  export type AggregateWeeklySummary = {
    _count: WeeklySummaryCountAggregateOutputType | null
    _avg: WeeklySummaryAvgAggregateOutputType | null
    _sum: WeeklySummarySumAggregateOutputType | null
    _min: WeeklySummaryMinAggregateOutputType | null
    _max: WeeklySummaryMaxAggregateOutputType | null
  }

  export type WeeklySummaryAvgAggregateOutputType = {
    id: number | null
    totalIncidents: number | null
    dailyAverage: number | null
    maxRangeKm: number | null
  }

  export type WeeklySummarySumAggregateOutputType = {
    id: number | null
    totalIncidents: number | null
    dailyAverage: number | null
    maxRangeKm: number | null
  }

  export type WeeklySummaryMinAggregateOutputType = {
    id: number | null
    titleEn: string | null
    titleAr: string | null
    subtitleEn: string | null
    subtitleAr: string | null
    weekStart: Date | null
    weekEnd: Date | null
    totalIncidents: number | null
    dailyAverage: number | null
    maxRangeKm: number | null
    notesEn: string | null
    notesAr: string | null
    coverImageUrl: string | null
    status: $Enums.SummaryStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeeklySummaryMaxAggregateOutputType = {
    id: number | null
    titleEn: string | null
    titleAr: string | null
    subtitleEn: string | null
    subtitleAr: string | null
    weekStart: Date | null
    weekEnd: Date | null
    totalIncidents: number | null
    dailyAverage: number | null
    maxRangeKm: number | null
    notesEn: string | null
    notesAr: string | null
    coverImageUrl: string | null
    status: $Enums.SummaryStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeeklySummaryCountAggregateOutputType = {
    id: number
    titleEn: number
    titleAr: number
    subtitleEn: number
    subtitleAr: number
    weekStart: number
    weekEnd: number
    totalIncidents: number
    dailyAverage: number
    maxRangeKm: number
    notesEn: number
    notesAr: number
    coverImageUrl: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WeeklySummaryAvgAggregateInputType = {
    id?: true
    totalIncidents?: true
    dailyAverage?: true
    maxRangeKm?: true
  }

  export type WeeklySummarySumAggregateInputType = {
    id?: true
    totalIncidents?: true
    dailyAverage?: true
    maxRangeKm?: true
  }

  export type WeeklySummaryMinAggregateInputType = {
    id?: true
    titleEn?: true
    titleAr?: true
    subtitleEn?: true
    subtitleAr?: true
    weekStart?: true
    weekEnd?: true
    totalIncidents?: true
    dailyAverage?: true
    maxRangeKm?: true
    notesEn?: true
    notesAr?: true
    coverImageUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeeklySummaryMaxAggregateInputType = {
    id?: true
    titleEn?: true
    titleAr?: true
    subtitleEn?: true
    subtitleAr?: true
    weekStart?: true
    weekEnd?: true
    totalIncidents?: true
    dailyAverage?: true
    maxRangeKm?: true
    notesEn?: true
    notesAr?: true
    coverImageUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeeklySummaryCountAggregateInputType = {
    id?: true
    titleEn?: true
    titleAr?: true
    subtitleEn?: true
    subtitleAr?: true
    weekStart?: true
    weekEnd?: true
    totalIncidents?: true
    dailyAverage?: true
    maxRangeKm?: true
    notesEn?: true
    notesAr?: true
    coverImageUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WeeklySummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklySummary to aggregate.
     */
    where?: WeeklySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklySummaries to fetch.
     */
    orderBy?: WeeklySummaryOrderByWithRelationInput | WeeklySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeeklySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeeklySummaries
    **/
    _count?: true | WeeklySummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeeklySummaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeeklySummarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeeklySummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeeklySummaryMaxAggregateInputType
  }

  export type GetWeeklySummaryAggregateType<T extends WeeklySummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateWeeklySummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeeklySummary[P]>
      : GetScalarType<T[P], AggregateWeeklySummary[P]>
  }




  export type WeeklySummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklySummaryWhereInput
    orderBy?: WeeklySummaryOrderByWithAggregationInput | WeeklySummaryOrderByWithAggregationInput[]
    by: WeeklySummaryScalarFieldEnum[] | WeeklySummaryScalarFieldEnum
    having?: WeeklySummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeeklySummaryCountAggregateInputType | true
    _avg?: WeeklySummaryAvgAggregateInputType
    _sum?: WeeklySummarySumAggregateInputType
    _min?: WeeklySummaryMinAggregateInputType
    _max?: WeeklySummaryMaxAggregateInputType
  }

  export type WeeklySummaryGroupByOutputType = {
    id: number
    titleEn: string
    titleAr: string
    subtitleEn: string | null
    subtitleAr: string | null
    weekStart: Date
    weekEnd: Date
    totalIncidents: number
    dailyAverage: number
    maxRangeKm: number | null
    notesEn: string | null
    notesAr: string | null
    coverImageUrl: string | null
    status: $Enums.SummaryStatus
    createdAt: Date
    updatedAt: Date
    _count: WeeklySummaryCountAggregateOutputType | null
    _avg: WeeklySummaryAvgAggregateOutputType | null
    _sum: WeeklySummarySumAggregateOutputType | null
    _min: WeeklySummaryMinAggregateOutputType | null
    _max: WeeklySummaryMaxAggregateOutputType | null
  }

  type GetWeeklySummaryGroupByPayload<T extends WeeklySummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeeklySummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeeklySummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeeklySummaryGroupByOutputType[P]>
            : GetScalarType<T[P], WeeklySummaryGroupByOutputType[P]>
        }
      >
    >


  export type WeeklySummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titleEn?: boolean
    titleAr?: boolean
    subtitleEn?: boolean
    subtitleAr?: boolean
    weekStart?: boolean
    weekEnd?: boolean
    totalIncidents?: boolean
    dailyAverage?: boolean
    maxRangeKm?: boolean
    notesEn?: boolean
    notesAr?: boolean
    coverImageUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    statBlocks?: boolean | WeeklySummary$statBlocksArgs<ExtArgs>
    incidents?: boolean | WeeklySummary$incidentsArgs<ExtArgs>
    _count?: boolean | WeeklySummaryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklySummary"]>

  export type WeeklySummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titleEn?: boolean
    titleAr?: boolean
    subtitleEn?: boolean
    subtitleAr?: boolean
    weekStart?: boolean
    weekEnd?: boolean
    totalIncidents?: boolean
    dailyAverage?: boolean
    maxRangeKm?: boolean
    notesEn?: boolean
    notesAr?: boolean
    coverImageUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["weeklySummary"]>

  export type WeeklySummarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titleEn?: boolean
    titleAr?: boolean
    subtitleEn?: boolean
    subtitleAr?: boolean
    weekStart?: boolean
    weekEnd?: boolean
    totalIncidents?: boolean
    dailyAverage?: boolean
    maxRangeKm?: boolean
    notesEn?: boolean
    notesAr?: boolean
    coverImageUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["weeklySummary"]>

  export type WeeklySummarySelectScalar = {
    id?: boolean
    titleEn?: boolean
    titleAr?: boolean
    subtitleEn?: boolean
    subtitleAr?: boolean
    weekStart?: boolean
    weekEnd?: boolean
    totalIncidents?: boolean
    dailyAverage?: boolean
    maxRangeKm?: boolean
    notesEn?: boolean
    notesAr?: boolean
    coverImageUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WeeklySummaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titleEn" | "titleAr" | "subtitleEn" | "subtitleAr" | "weekStart" | "weekEnd" | "totalIncidents" | "dailyAverage" | "maxRangeKm" | "notesEn" | "notesAr" | "coverImageUrl" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["weeklySummary"]>
  export type WeeklySummaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statBlocks?: boolean | WeeklySummary$statBlocksArgs<ExtArgs>
    incidents?: boolean | WeeklySummary$incidentsArgs<ExtArgs>
    _count?: boolean | WeeklySummaryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WeeklySummaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WeeklySummaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WeeklySummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeeklySummary"
    objects: {
      statBlocks: Prisma.$SummaryStatBlockPayload<ExtArgs>[]
      incidents: Prisma.$IncidentRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titleEn: string
      titleAr: string
      subtitleEn: string | null
      subtitleAr: string | null
      weekStart: Date
      weekEnd: Date
      totalIncidents: number
      dailyAverage: number
      maxRangeKm: number | null
      notesEn: string | null
      notesAr: string | null
      coverImageUrl: string | null
      status: $Enums.SummaryStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["weeklySummary"]>
    composites: {}
  }

  type WeeklySummaryGetPayload<S extends boolean | null | undefined | WeeklySummaryDefaultArgs> = $Result.GetResult<Prisma.$WeeklySummaryPayload, S>

  type WeeklySummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeeklySummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeeklySummaryCountAggregateInputType | true
    }

  export interface WeeklySummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeeklySummary'], meta: { name: 'WeeklySummary' } }
    /**
     * Find zero or one WeeklySummary that matches the filter.
     * @param {WeeklySummaryFindUniqueArgs} args - Arguments to find a WeeklySummary
     * @example
     * // Get one WeeklySummary
     * const weeklySummary = await prisma.weeklySummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeeklySummaryFindUniqueArgs>(args: SelectSubset<T, WeeklySummaryFindUniqueArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeeklySummary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeeklySummaryFindUniqueOrThrowArgs} args - Arguments to find a WeeklySummary
     * @example
     * // Get one WeeklySummary
     * const weeklySummary = await prisma.weeklySummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeeklySummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, WeeklySummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklySummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryFindFirstArgs} args - Arguments to find a WeeklySummary
     * @example
     * // Get one WeeklySummary
     * const weeklySummary = await prisma.weeklySummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeeklySummaryFindFirstArgs>(args?: SelectSubset<T, WeeklySummaryFindFirstArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklySummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryFindFirstOrThrowArgs} args - Arguments to find a WeeklySummary
     * @example
     * // Get one WeeklySummary
     * const weeklySummary = await prisma.weeklySummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeeklySummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, WeeklySummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeeklySummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeeklySummaries
     * const weeklySummaries = await prisma.weeklySummary.findMany()
     * 
     * // Get first 10 WeeklySummaries
     * const weeklySummaries = await prisma.weeklySummary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weeklySummaryWithIdOnly = await prisma.weeklySummary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeeklySummaryFindManyArgs>(args?: SelectSubset<T, WeeklySummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeeklySummary.
     * @param {WeeklySummaryCreateArgs} args - Arguments to create a WeeklySummary.
     * @example
     * // Create one WeeklySummary
     * const WeeklySummary = await prisma.weeklySummary.create({
     *   data: {
     *     // ... data to create a WeeklySummary
     *   }
     * })
     * 
     */
    create<T extends WeeklySummaryCreateArgs>(args: SelectSubset<T, WeeklySummaryCreateArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeeklySummaries.
     * @param {WeeklySummaryCreateManyArgs} args - Arguments to create many WeeklySummaries.
     * @example
     * // Create many WeeklySummaries
     * const weeklySummary = await prisma.weeklySummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeeklySummaryCreateManyArgs>(args?: SelectSubset<T, WeeklySummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeeklySummaries and returns the data saved in the database.
     * @param {WeeklySummaryCreateManyAndReturnArgs} args - Arguments to create many WeeklySummaries.
     * @example
     * // Create many WeeklySummaries
     * const weeklySummary = await prisma.weeklySummary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeeklySummaries and only return the `id`
     * const weeklySummaryWithIdOnly = await prisma.weeklySummary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeeklySummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, WeeklySummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeeklySummary.
     * @param {WeeklySummaryDeleteArgs} args - Arguments to delete one WeeklySummary.
     * @example
     * // Delete one WeeklySummary
     * const WeeklySummary = await prisma.weeklySummary.delete({
     *   where: {
     *     // ... filter to delete one WeeklySummary
     *   }
     * })
     * 
     */
    delete<T extends WeeklySummaryDeleteArgs>(args: SelectSubset<T, WeeklySummaryDeleteArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeeklySummary.
     * @param {WeeklySummaryUpdateArgs} args - Arguments to update one WeeklySummary.
     * @example
     * // Update one WeeklySummary
     * const weeklySummary = await prisma.weeklySummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeeklySummaryUpdateArgs>(args: SelectSubset<T, WeeklySummaryUpdateArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeeklySummaries.
     * @param {WeeklySummaryDeleteManyArgs} args - Arguments to filter WeeklySummaries to delete.
     * @example
     * // Delete a few WeeklySummaries
     * const { count } = await prisma.weeklySummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeeklySummaryDeleteManyArgs>(args?: SelectSubset<T, WeeklySummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklySummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeeklySummaries
     * const weeklySummary = await prisma.weeklySummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeeklySummaryUpdateManyArgs>(args: SelectSubset<T, WeeklySummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklySummaries and returns the data updated in the database.
     * @param {WeeklySummaryUpdateManyAndReturnArgs} args - Arguments to update many WeeklySummaries.
     * @example
     * // Update many WeeklySummaries
     * const weeklySummary = await prisma.weeklySummary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeeklySummaries and only return the `id`
     * const weeklySummaryWithIdOnly = await prisma.weeklySummary.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WeeklySummaryUpdateManyAndReturnArgs>(args: SelectSubset<T, WeeklySummaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeeklySummary.
     * @param {WeeklySummaryUpsertArgs} args - Arguments to update or create a WeeklySummary.
     * @example
     * // Update or create a WeeklySummary
     * const weeklySummary = await prisma.weeklySummary.upsert({
     *   create: {
     *     // ... data to create a WeeklySummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeeklySummary we want to update
     *   }
     * })
     */
    upsert<T extends WeeklySummaryUpsertArgs>(args: SelectSubset<T, WeeklySummaryUpsertArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeeklySummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryCountArgs} args - Arguments to filter WeeklySummaries to count.
     * @example
     * // Count the number of WeeklySummaries
     * const count = await prisma.weeklySummary.count({
     *   where: {
     *     // ... the filter for the WeeklySummaries we want to count
     *   }
     * })
    **/
    count<T extends WeeklySummaryCountArgs>(
      args?: Subset<T, WeeklySummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeeklySummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeeklySummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WeeklySummaryAggregateArgs>(args: Subset<T, WeeklySummaryAggregateArgs>): Prisma.PrismaPromise<GetWeeklySummaryAggregateType<T>>

    /**
     * Group by WeeklySummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WeeklySummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeeklySummaryGroupByArgs['orderBy'] }
        : { orderBy?: WeeklySummaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeeklySummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeeklySummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeeklySummary model
   */
  readonly fields: WeeklySummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeeklySummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeeklySummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    statBlocks<T extends WeeklySummary$statBlocksArgs<ExtArgs> = {}>(args?: Subset<T, WeeklySummary$statBlocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryStatBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incidents<T extends WeeklySummary$incidentsArgs<ExtArgs> = {}>(args?: Subset<T, WeeklySummary$incidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WeeklySummary model
   */
  interface WeeklySummaryFieldRefs {
    readonly id: FieldRef<"WeeklySummary", 'Int'>
    readonly titleEn: FieldRef<"WeeklySummary", 'String'>
    readonly titleAr: FieldRef<"WeeklySummary", 'String'>
    readonly subtitleEn: FieldRef<"WeeklySummary", 'String'>
    readonly subtitleAr: FieldRef<"WeeklySummary", 'String'>
    readonly weekStart: FieldRef<"WeeklySummary", 'DateTime'>
    readonly weekEnd: FieldRef<"WeeklySummary", 'DateTime'>
    readonly totalIncidents: FieldRef<"WeeklySummary", 'Int'>
    readonly dailyAverage: FieldRef<"WeeklySummary", 'Float'>
    readonly maxRangeKm: FieldRef<"WeeklySummary", 'Float'>
    readonly notesEn: FieldRef<"WeeklySummary", 'String'>
    readonly notesAr: FieldRef<"WeeklySummary", 'String'>
    readonly coverImageUrl: FieldRef<"WeeklySummary", 'String'>
    readonly status: FieldRef<"WeeklySummary", 'SummaryStatus'>
    readonly createdAt: FieldRef<"WeeklySummary", 'DateTime'>
    readonly updatedAt: FieldRef<"WeeklySummary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WeeklySummary findUnique
   */
  export type WeeklySummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySummary to fetch.
     */
    where: WeeklySummaryWhereUniqueInput
  }

  /**
   * WeeklySummary findUniqueOrThrow
   */
  export type WeeklySummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySummary to fetch.
     */
    where: WeeklySummaryWhereUniqueInput
  }

  /**
   * WeeklySummary findFirst
   */
  export type WeeklySummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySummary to fetch.
     */
    where?: WeeklySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklySummaries to fetch.
     */
    orderBy?: WeeklySummaryOrderByWithRelationInput | WeeklySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklySummaries.
     */
    cursor?: WeeklySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklySummaries.
     */
    distinct?: WeeklySummaryScalarFieldEnum | WeeklySummaryScalarFieldEnum[]
  }

  /**
   * WeeklySummary findFirstOrThrow
   */
  export type WeeklySummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySummary to fetch.
     */
    where?: WeeklySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklySummaries to fetch.
     */
    orderBy?: WeeklySummaryOrderByWithRelationInput | WeeklySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklySummaries.
     */
    cursor?: WeeklySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklySummaries.
     */
    distinct?: WeeklySummaryScalarFieldEnum | WeeklySummaryScalarFieldEnum[]
  }

  /**
   * WeeklySummary findMany
   */
  export type WeeklySummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySummaries to fetch.
     */
    where?: WeeklySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklySummaries to fetch.
     */
    orderBy?: WeeklySummaryOrderByWithRelationInput | WeeklySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeeklySummaries.
     */
    cursor?: WeeklySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklySummaries.
     */
    skip?: number
    distinct?: WeeklySummaryScalarFieldEnum | WeeklySummaryScalarFieldEnum[]
  }

  /**
   * WeeklySummary create
   */
  export type WeeklySummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * The data needed to create a WeeklySummary.
     */
    data: XOR<WeeklySummaryCreateInput, WeeklySummaryUncheckedCreateInput>
  }

  /**
   * WeeklySummary createMany
   */
  export type WeeklySummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeeklySummaries.
     */
    data: WeeklySummaryCreateManyInput | WeeklySummaryCreateManyInput[]
  }

  /**
   * WeeklySummary createManyAndReturn
   */
  export type WeeklySummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * The data used to create many WeeklySummaries.
     */
    data: WeeklySummaryCreateManyInput | WeeklySummaryCreateManyInput[]
  }

  /**
   * WeeklySummary update
   */
  export type WeeklySummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * The data needed to update a WeeklySummary.
     */
    data: XOR<WeeklySummaryUpdateInput, WeeklySummaryUncheckedUpdateInput>
    /**
     * Choose, which WeeklySummary to update.
     */
    where: WeeklySummaryWhereUniqueInput
  }

  /**
   * WeeklySummary updateMany
   */
  export type WeeklySummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeeklySummaries.
     */
    data: XOR<WeeklySummaryUpdateManyMutationInput, WeeklySummaryUncheckedUpdateManyInput>
    /**
     * Filter which WeeklySummaries to update
     */
    where?: WeeklySummaryWhereInput
    /**
     * Limit how many WeeklySummaries to update.
     */
    limit?: number
  }

  /**
   * WeeklySummary updateManyAndReturn
   */
  export type WeeklySummaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * The data used to update WeeklySummaries.
     */
    data: XOR<WeeklySummaryUpdateManyMutationInput, WeeklySummaryUncheckedUpdateManyInput>
    /**
     * Filter which WeeklySummaries to update
     */
    where?: WeeklySummaryWhereInput
    /**
     * Limit how many WeeklySummaries to update.
     */
    limit?: number
  }

  /**
   * WeeklySummary upsert
   */
  export type WeeklySummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * The filter to search for the WeeklySummary to update in case it exists.
     */
    where: WeeklySummaryWhereUniqueInput
    /**
     * In case the WeeklySummary found by the `where` argument doesn't exist, create a new WeeklySummary with this data.
     */
    create: XOR<WeeklySummaryCreateInput, WeeklySummaryUncheckedCreateInput>
    /**
     * In case the WeeklySummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeeklySummaryUpdateInput, WeeklySummaryUncheckedUpdateInput>
  }

  /**
   * WeeklySummary delete
   */
  export type WeeklySummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * Filter which WeeklySummary to delete.
     */
    where: WeeklySummaryWhereUniqueInput
  }

  /**
   * WeeklySummary deleteMany
   */
  export type WeeklySummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklySummaries to delete
     */
    where?: WeeklySummaryWhereInput
    /**
     * Limit how many WeeklySummaries to delete.
     */
    limit?: number
  }

  /**
   * WeeklySummary.statBlocks
   */
  export type WeeklySummary$statBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryStatBlock
     */
    select?: SummaryStatBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SummaryStatBlock
     */
    omit?: SummaryStatBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryStatBlockInclude<ExtArgs> | null
    where?: SummaryStatBlockWhereInput
    orderBy?: SummaryStatBlockOrderByWithRelationInput | SummaryStatBlockOrderByWithRelationInput[]
    cursor?: SummaryStatBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SummaryStatBlockScalarFieldEnum | SummaryStatBlockScalarFieldEnum[]
  }

  /**
   * WeeklySummary.incidents
   */
  export type WeeklySummary$incidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentRecord
     */
    select?: IncidentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentRecord
     */
    omit?: IncidentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentRecordInclude<ExtArgs> | null
    where?: IncidentRecordWhereInput
    orderBy?: IncidentRecordOrderByWithRelationInput | IncidentRecordOrderByWithRelationInput[]
    cursor?: IncidentRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentRecordScalarFieldEnum | IncidentRecordScalarFieldEnum[]
  }

  /**
   * WeeklySummary without action
   */
  export type WeeklySummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
  }


  /**
   * Model SummaryStatBlock
   */

  export type AggregateSummaryStatBlock = {
    _count: SummaryStatBlockCountAggregateOutputType | null
    _avg: SummaryStatBlockAvgAggregateOutputType | null
    _sum: SummaryStatBlockSumAggregateOutputType | null
    _min: SummaryStatBlockMinAggregateOutputType | null
    _max: SummaryStatBlockMaxAggregateOutputType | null
  }

  export type SummaryStatBlockAvgAggregateOutputType = {
    id: number | null
    weeklySummaryId: number | null
    value: number | null
    displayOrder: number | null
  }

  export type SummaryStatBlockSumAggregateOutputType = {
    id: number | null
    weeklySummaryId: number | null
    value: number | null
    displayOrder: number | null
  }

  export type SummaryStatBlockMinAggregateOutputType = {
    id: number | null
    weeklySummaryId: number | null
    labelEn: string | null
    labelAr: string | null
    value: number | null
    icon: string | null
    displayOrder: number | null
    groupName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SummaryStatBlockMaxAggregateOutputType = {
    id: number | null
    weeklySummaryId: number | null
    labelEn: string | null
    labelAr: string | null
    value: number | null
    icon: string | null
    displayOrder: number | null
    groupName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SummaryStatBlockCountAggregateOutputType = {
    id: number
    weeklySummaryId: number
    labelEn: number
    labelAr: number
    value: number
    icon: number
    displayOrder: number
    groupName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SummaryStatBlockAvgAggregateInputType = {
    id?: true
    weeklySummaryId?: true
    value?: true
    displayOrder?: true
  }

  export type SummaryStatBlockSumAggregateInputType = {
    id?: true
    weeklySummaryId?: true
    value?: true
    displayOrder?: true
  }

  export type SummaryStatBlockMinAggregateInputType = {
    id?: true
    weeklySummaryId?: true
    labelEn?: true
    labelAr?: true
    value?: true
    icon?: true
    displayOrder?: true
    groupName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SummaryStatBlockMaxAggregateInputType = {
    id?: true
    weeklySummaryId?: true
    labelEn?: true
    labelAr?: true
    value?: true
    icon?: true
    displayOrder?: true
    groupName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SummaryStatBlockCountAggregateInputType = {
    id?: true
    weeklySummaryId?: true
    labelEn?: true
    labelAr?: true
    value?: true
    icon?: true
    displayOrder?: true
    groupName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SummaryStatBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SummaryStatBlock to aggregate.
     */
    where?: SummaryStatBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SummaryStatBlocks to fetch.
     */
    orderBy?: SummaryStatBlockOrderByWithRelationInput | SummaryStatBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SummaryStatBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SummaryStatBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SummaryStatBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SummaryStatBlocks
    **/
    _count?: true | SummaryStatBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SummaryStatBlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SummaryStatBlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SummaryStatBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SummaryStatBlockMaxAggregateInputType
  }

  export type GetSummaryStatBlockAggregateType<T extends SummaryStatBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateSummaryStatBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSummaryStatBlock[P]>
      : GetScalarType<T[P], AggregateSummaryStatBlock[P]>
  }




  export type SummaryStatBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SummaryStatBlockWhereInput
    orderBy?: SummaryStatBlockOrderByWithAggregationInput | SummaryStatBlockOrderByWithAggregationInput[]
    by: SummaryStatBlockScalarFieldEnum[] | SummaryStatBlockScalarFieldEnum
    having?: SummaryStatBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SummaryStatBlockCountAggregateInputType | true
    _avg?: SummaryStatBlockAvgAggregateInputType
    _sum?: SummaryStatBlockSumAggregateInputType
    _min?: SummaryStatBlockMinAggregateInputType
    _max?: SummaryStatBlockMaxAggregateInputType
  }

  export type SummaryStatBlockGroupByOutputType = {
    id: number
    weeklySummaryId: number
    labelEn: string
    labelAr: string
    value: number
    icon: string | null
    displayOrder: number
    groupName: string | null
    createdAt: Date
    updatedAt: Date
    _count: SummaryStatBlockCountAggregateOutputType | null
    _avg: SummaryStatBlockAvgAggregateOutputType | null
    _sum: SummaryStatBlockSumAggregateOutputType | null
    _min: SummaryStatBlockMinAggregateOutputType | null
    _max: SummaryStatBlockMaxAggregateOutputType | null
  }

  type GetSummaryStatBlockGroupByPayload<T extends SummaryStatBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SummaryStatBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SummaryStatBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SummaryStatBlockGroupByOutputType[P]>
            : GetScalarType<T[P], SummaryStatBlockGroupByOutputType[P]>
        }
      >
    >


  export type SummaryStatBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weeklySummaryId?: boolean
    labelEn?: boolean
    labelAr?: boolean
    value?: boolean
    icon?: boolean
    displayOrder?: boolean
    groupName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    weeklySummary?: boolean | WeeklySummaryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["summaryStatBlock"]>

  export type SummaryStatBlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weeklySummaryId?: boolean
    labelEn?: boolean
    labelAr?: boolean
    value?: boolean
    icon?: boolean
    displayOrder?: boolean
    groupName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    weeklySummary?: boolean | WeeklySummaryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["summaryStatBlock"]>

  export type SummaryStatBlockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weeklySummaryId?: boolean
    labelEn?: boolean
    labelAr?: boolean
    value?: boolean
    icon?: boolean
    displayOrder?: boolean
    groupName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    weeklySummary?: boolean | WeeklySummaryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["summaryStatBlock"]>

  export type SummaryStatBlockSelectScalar = {
    id?: boolean
    weeklySummaryId?: boolean
    labelEn?: boolean
    labelAr?: boolean
    value?: boolean
    icon?: boolean
    displayOrder?: boolean
    groupName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SummaryStatBlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "weeklySummaryId" | "labelEn" | "labelAr" | "value" | "icon" | "displayOrder" | "groupName" | "createdAt" | "updatedAt", ExtArgs["result"]["summaryStatBlock"]>
  export type SummaryStatBlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weeklySummary?: boolean | WeeklySummaryDefaultArgs<ExtArgs>
  }
  export type SummaryStatBlockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weeklySummary?: boolean | WeeklySummaryDefaultArgs<ExtArgs>
  }
  export type SummaryStatBlockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weeklySummary?: boolean | WeeklySummaryDefaultArgs<ExtArgs>
  }

  export type $SummaryStatBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SummaryStatBlock"
    objects: {
      weeklySummary: Prisma.$WeeklySummaryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      weeklySummaryId: number
      labelEn: string
      labelAr: string
      value: number
      icon: string | null
      displayOrder: number
      groupName: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["summaryStatBlock"]>
    composites: {}
  }

  type SummaryStatBlockGetPayload<S extends boolean | null | undefined | SummaryStatBlockDefaultArgs> = $Result.GetResult<Prisma.$SummaryStatBlockPayload, S>

  type SummaryStatBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SummaryStatBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SummaryStatBlockCountAggregateInputType | true
    }

  export interface SummaryStatBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SummaryStatBlock'], meta: { name: 'SummaryStatBlock' } }
    /**
     * Find zero or one SummaryStatBlock that matches the filter.
     * @param {SummaryStatBlockFindUniqueArgs} args - Arguments to find a SummaryStatBlock
     * @example
     * // Get one SummaryStatBlock
     * const summaryStatBlock = await prisma.summaryStatBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SummaryStatBlockFindUniqueArgs>(args: SelectSubset<T, SummaryStatBlockFindUniqueArgs<ExtArgs>>): Prisma__SummaryStatBlockClient<$Result.GetResult<Prisma.$SummaryStatBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SummaryStatBlock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SummaryStatBlockFindUniqueOrThrowArgs} args - Arguments to find a SummaryStatBlock
     * @example
     * // Get one SummaryStatBlock
     * const summaryStatBlock = await prisma.summaryStatBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SummaryStatBlockFindUniqueOrThrowArgs>(args: SelectSubset<T, SummaryStatBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SummaryStatBlockClient<$Result.GetResult<Prisma.$SummaryStatBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SummaryStatBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryStatBlockFindFirstArgs} args - Arguments to find a SummaryStatBlock
     * @example
     * // Get one SummaryStatBlock
     * const summaryStatBlock = await prisma.summaryStatBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SummaryStatBlockFindFirstArgs>(args?: SelectSubset<T, SummaryStatBlockFindFirstArgs<ExtArgs>>): Prisma__SummaryStatBlockClient<$Result.GetResult<Prisma.$SummaryStatBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SummaryStatBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryStatBlockFindFirstOrThrowArgs} args - Arguments to find a SummaryStatBlock
     * @example
     * // Get one SummaryStatBlock
     * const summaryStatBlock = await prisma.summaryStatBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SummaryStatBlockFindFirstOrThrowArgs>(args?: SelectSubset<T, SummaryStatBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__SummaryStatBlockClient<$Result.GetResult<Prisma.$SummaryStatBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SummaryStatBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryStatBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SummaryStatBlocks
     * const summaryStatBlocks = await prisma.summaryStatBlock.findMany()
     * 
     * // Get first 10 SummaryStatBlocks
     * const summaryStatBlocks = await prisma.summaryStatBlock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const summaryStatBlockWithIdOnly = await prisma.summaryStatBlock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SummaryStatBlockFindManyArgs>(args?: SelectSubset<T, SummaryStatBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryStatBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SummaryStatBlock.
     * @param {SummaryStatBlockCreateArgs} args - Arguments to create a SummaryStatBlock.
     * @example
     * // Create one SummaryStatBlock
     * const SummaryStatBlock = await prisma.summaryStatBlock.create({
     *   data: {
     *     // ... data to create a SummaryStatBlock
     *   }
     * })
     * 
     */
    create<T extends SummaryStatBlockCreateArgs>(args: SelectSubset<T, SummaryStatBlockCreateArgs<ExtArgs>>): Prisma__SummaryStatBlockClient<$Result.GetResult<Prisma.$SummaryStatBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SummaryStatBlocks.
     * @param {SummaryStatBlockCreateManyArgs} args - Arguments to create many SummaryStatBlocks.
     * @example
     * // Create many SummaryStatBlocks
     * const summaryStatBlock = await prisma.summaryStatBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SummaryStatBlockCreateManyArgs>(args?: SelectSubset<T, SummaryStatBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SummaryStatBlocks and returns the data saved in the database.
     * @param {SummaryStatBlockCreateManyAndReturnArgs} args - Arguments to create many SummaryStatBlocks.
     * @example
     * // Create many SummaryStatBlocks
     * const summaryStatBlock = await prisma.summaryStatBlock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SummaryStatBlocks and only return the `id`
     * const summaryStatBlockWithIdOnly = await prisma.summaryStatBlock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SummaryStatBlockCreateManyAndReturnArgs>(args?: SelectSubset<T, SummaryStatBlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryStatBlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SummaryStatBlock.
     * @param {SummaryStatBlockDeleteArgs} args - Arguments to delete one SummaryStatBlock.
     * @example
     * // Delete one SummaryStatBlock
     * const SummaryStatBlock = await prisma.summaryStatBlock.delete({
     *   where: {
     *     // ... filter to delete one SummaryStatBlock
     *   }
     * })
     * 
     */
    delete<T extends SummaryStatBlockDeleteArgs>(args: SelectSubset<T, SummaryStatBlockDeleteArgs<ExtArgs>>): Prisma__SummaryStatBlockClient<$Result.GetResult<Prisma.$SummaryStatBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SummaryStatBlock.
     * @param {SummaryStatBlockUpdateArgs} args - Arguments to update one SummaryStatBlock.
     * @example
     * // Update one SummaryStatBlock
     * const summaryStatBlock = await prisma.summaryStatBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SummaryStatBlockUpdateArgs>(args: SelectSubset<T, SummaryStatBlockUpdateArgs<ExtArgs>>): Prisma__SummaryStatBlockClient<$Result.GetResult<Prisma.$SummaryStatBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SummaryStatBlocks.
     * @param {SummaryStatBlockDeleteManyArgs} args - Arguments to filter SummaryStatBlocks to delete.
     * @example
     * // Delete a few SummaryStatBlocks
     * const { count } = await prisma.summaryStatBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SummaryStatBlockDeleteManyArgs>(args?: SelectSubset<T, SummaryStatBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SummaryStatBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryStatBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SummaryStatBlocks
     * const summaryStatBlock = await prisma.summaryStatBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SummaryStatBlockUpdateManyArgs>(args: SelectSubset<T, SummaryStatBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SummaryStatBlocks and returns the data updated in the database.
     * @param {SummaryStatBlockUpdateManyAndReturnArgs} args - Arguments to update many SummaryStatBlocks.
     * @example
     * // Update many SummaryStatBlocks
     * const summaryStatBlock = await prisma.summaryStatBlock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SummaryStatBlocks and only return the `id`
     * const summaryStatBlockWithIdOnly = await prisma.summaryStatBlock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SummaryStatBlockUpdateManyAndReturnArgs>(args: SelectSubset<T, SummaryStatBlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryStatBlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SummaryStatBlock.
     * @param {SummaryStatBlockUpsertArgs} args - Arguments to update or create a SummaryStatBlock.
     * @example
     * // Update or create a SummaryStatBlock
     * const summaryStatBlock = await prisma.summaryStatBlock.upsert({
     *   create: {
     *     // ... data to create a SummaryStatBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SummaryStatBlock we want to update
     *   }
     * })
     */
    upsert<T extends SummaryStatBlockUpsertArgs>(args: SelectSubset<T, SummaryStatBlockUpsertArgs<ExtArgs>>): Prisma__SummaryStatBlockClient<$Result.GetResult<Prisma.$SummaryStatBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SummaryStatBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryStatBlockCountArgs} args - Arguments to filter SummaryStatBlocks to count.
     * @example
     * // Count the number of SummaryStatBlocks
     * const count = await prisma.summaryStatBlock.count({
     *   where: {
     *     // ... the filter for the SummaryStatBlocks we want to count
     *   }
     * })
    **/
    count<T extends SummaryStatBlockCountArgs>(
      args?: Subset<T, SummaryStatBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SummaryStatBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SummaryStatBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryStatBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SummaryStatBlockAggregateArgs>(args: Subset<T, SummaryStatBlockAggregateArgs>): Prisma.PrismaPromise<GetSummaryStatBlockAggregateType<T>>

    /**
     * Group by SummaryStatBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryStatBlockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SummaryStatBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SummaryStatBlockGroupByArgs['orderBy'] }
        : { orderBy?: SummaryStatBlockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SummaryStatBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSummaryStatBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SummaryStatBlock model
   */
  readonly fields: SummaryStatBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SummaryStatBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SummaryStatBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    weeklySummary<T extends WeeklySummaryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WeeklySummaryDefaultArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SummaryStatBlock model
   */
  interface SummaryStatBlockFieldRefs {
    readonly id: FieldRef<"SummaryStatBlock", 'Int'>
    readonly weeklySummaryId: FieldRef<"SummaryStatBlock", 'Int'>
    readonly labelEn: FieldRef<"SummaryStatBlock", 'String'>
    readonly labelAr: FieldRef<"SummaryStatBlock", 'String'>
    readonly value: FieldRef<"SummaryStatBlock", 'Int'>
    readonly icon: FieldRef<"SummaryStatBlock", 'String'>
    readonly displayOrder: FieldRef<"SummaryStatBlock", 'Int'>
    readonly groupName: FieldRef<"SummaryStatBlock", 'String'>
    readonly createdAt: FieldRef<"SummaryStatBlock", 'DateTime'>
    readonly updatedAt: FieldRef<"SummaryStatBlock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SummaryStatBlock findUnique
   */
  export type SummaryStatBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryStatBlock
     */
    select?: SummaryStatBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SummaryStatBlock
     */
    omit?: SummaryStatBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryStatBlockInclude<ExtArgs> | null
    /**
     * Filter, which SummaryStatBlock to fetch.
     */
    where: SummaryStatBlockWhereUniqueInput
  }

  /**
   * SummaryStatBlock findUniqueOrThrow
   */
  export type SummaryStatBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryStatBlock
     */
    select?: SummaryStatBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SummaryStatBlock
     */
    omit?: SummaryStatBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryStatBlockInclude<ExtArgs> | null
    /**
     * Filter, which SummaryStatBlock to fetch.
     */
    where: SummaryStatBlockWhereUniqueInput
  }

  /**
   * SummaryStatBlock findFirst
   */
  export type SummaryStatBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryStatBlock
     */
    select?: SummaryStatBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SummaryStatBlock
     */
    omit?: SummaryStatBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryStatBlockInclude<ExtArgs> | null
    /**
     * Filter, which SummaryStatBlock to fetch.
     */
    where?: SummaryStatBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SummaryStatBlocks to fetch.
     */
    orderBy?: SummaryStatBlockOrderByWithRelationInput | SummaryStatBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SummaryStatBlocks.
     */
    cursor?: SummaryStatBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SummaryStatBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SummaryStatBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SummaryStatBlocks.
     */
    distinct?: SummaryStatBlockScalarFieldEnum | SummaryStatBlockScalarFieldEnum[]
  }

  /**
   * SummaryStatBlock findFirstOrThrow
   */
  export type SummaryStatBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryStatBlock
     */
    select?: SummaryStatBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SummaryStatBlock
     */
    omit?: SummaryStatBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryStatBlockInclude<ExtArgs> | null
    /**
     * Filter, which SummaryStatBlock to fetch.
     */
    where?: SummaryStatBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SummaryStatBlocks to fetch.
     */
    orderBy?: SummaryStatBlockOrderByWithRelationInput | SummaryStatBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SummaryStatBlocks.
     */
    cursor?: SummaryStatBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SummaryStatBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SummaryStatBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SummaryStatBlocks.
     */
    distinct?: SummaryStatBlockScalarFieldEnum | SummaryStatBlockScalarFieldEnum[]
  }

  /**
   * SummaryStatBlock findMany
   */
  export type SummaryStatBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryStatBlock
     */
    select?: SummaryStatBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SummaryStatBlock
     */
    omit?: SummaryStatBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryStatBlockInclude<ExtArgs> | null
    /**
     * Filter, which SummaryStatBlocks to fetch.
     */
    where?: SummaryStatBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SummaryStatBlocks to fetch.
     */
    orderBy?: SummaryStatBlockOrderByWithRelationInput | SummaryStatBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SummaryStatBlocks.
     */
    cursor?: SummaryStatBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SummaryStatBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SummaryStatBlocks.
     */
    skip?: number
    distinct?: SummaryStatBlockScalarFieldEnum | SummaryStatBlockScalarFieldEnum[]
  }

  /**
   * SummaryStatBlock create
   */
  export type SummaryStatBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryStatBlock
     */
    select?: SummaryStatBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SummaryStatBlock
     */
    omit?: SummaryStatBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryStatBlockInclude<ExtArgs> | null
    /**
     * The data needed to create a SummaryStatBlock.
     */
    data: XOR<SummaryStatBlockCreateInput, SummaryStatBlockUncheckedCreateInput>
  }

  /**
   * SummaryStatBlock createMany
   */
  export type SummaryStatBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SummaryStatBlocks.
     */
    data: SummaryStatBlockCreateManyInput | SummaryStatBlockCreateManyInput[]
  }

  /**
   * SummaryStatBlock createManyAndReturn
   */
  export type SummaryStatBlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryStatBlock
     */
    select?: SummaryStatBlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SummaryStatBlock
     */
    omit?: SummaryStatBlockOmit<ExtArgs> | null
    /**
     * The data used to create many SummaryStatBlocks.
     */
    data: SummaryStatBlockCreateManyInput | SummaryStatBlockCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryStatBlockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SummaryStatBlock update
   */
  export type SummaryStatBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryStatBlock
     */
    select?: SummaryStatBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SummaryStatBlock
     */
    omit?: SummaryStatBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryStatBlockInclude<ExtArgs> | null
    /**
     * The data needed to update a SummaryStatBlock.
     */
    data: XOR<SummaryStatBlockUpdateInput, SummaryStatBlockUncheckedUpdateInput>
    /**
     * Choose, which SummaryStatBlock to update.
     */
    where: SummaryStatBlockWhereUniqueInput
  }

  /**
   * SummaryStatBlock updateMany
   */
  export type SummaryStatBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SummaryStatBlocks.
     */
    data: XOR<SummaryStatBlockUpdateManyMutationInput, SummaryStatBlockUncheckedUpdateManyInput>
    /**
     * Filter which SummaryStatBlocks to update
     */
    where?: SummaryStatBlockWhereInput
    /**
     * Limit how many SummaryStatBlocks to update.
     */
    limit?: number
  }

  /**
   * SummaryStatBlock updateManyAndReturn
   */
  export type SummaryStatBlockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryStatBlock
     */
    select?: SummaryStatBlockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SummaryStatBlock
     */
    omit?: SummaryStatBlockOmit<ExtArgs> | null
    /**
     * The data used to update SummaryStatBlocks.
     */
    data: XOR<SummaryStatBlockUpdateManyMutationInput, SummaryStatBlockUncheckedUpdateManyInput>
    /**
     * Filter which SummaryStatBlocks to update
     */
    where?: SummaryStatBlockWhereInput
    /**
     * Limit how many SummaryStatBlocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryStatBlockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SummaryStatBlock upsert
   */
  export type SummaryStatBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryStatBlock
     */
    select?: SummaryStatBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SummaryStatBlock
     */
    omit?: SummaryStatBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryStatBlockInclude<ExtArgs> | null
    /**
     * The filter to search for the SummaryStatBlock to update in case it exists.
     */
    where: SummaryStatBlockWhereUniqueInput
    /**
     * In case the SummaryStatBlock found by the `where` argument doesn't exist, create a new SummaryStatBlock with this data.
     */
    create: XOR<SummaryStatBlockCreateInput, SummaryStatBlockUncheckedCreateInput>
    /**
     * In case the SummaryStatBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SummaryStatBlockUpdateInput, SummaryStatBlockUncheckedUpdateInput>
  }

  /**
   * SummaryStatBlock delete
   */
  export type SummaryStatBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryStatBlock
     */
    select?: SummaryStatBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SummaryStatBlock
     */
    omit?: SummaryStatBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryStatBlockInclude<ExtArgs> | null
    /**
     * Filter which SummaryStatBlock to delete.
     */
    where: SummaryStatBlockWhereUniqueInput
  }

  /**
   * SummaryStatBlock deleteMany
   */
  export type SummaryStatBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SummaryStatBlocks to delete
     */
    where?: SummaryStatBlockWhereInput
    /**
     * Limit how many SummaryStatBlocks to delete.
     */
    limit?: number
  }

  /**
   * SummaryStatBlock without action
   */
  export type SummaryStatBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryStatBlock
     */
    select?: SummaryStatBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SummaryStatBlock
     */
    omit?: SummaryStatBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryStatBlockInclude<ExtArgs> | null
  }


  /**
   * Model IncidentRecord
   */

  export type AggregateIncidentRecord = {
    _count: IncidentRecordCountAggregateOutputType | null
    _avg: IncidentRecordAvgAggregateOutputType | null
    _sum: IncidentRecordSumAggregateOutputType | null
    _min: IncidentRecordMinAggregateOutputType | null
    _max: IncidentRecordMaxAggregateOutputType | null
  }

  export type IncidentRecordAvgAggregateOutputType = {
    id: number | null
    weeklySummaryId: number | null
    count: number | null
    latitude: number | null
    longitude: number | null
    sourceId: number | null
  }

  export type IncidentRecordSumAggregateOutputType = {
    id: number | null
    weeklySummaryId: number | null
    count: number | null
    latitude: number | null
    longitude: number | null
    sourceId: number | null
  }

  export type IncidentRecordMinAggregateOutputType = {
    id: number | null
    weeklySummaryId: number | null
    titleEn: string | null
    titleAr: string | null
    descriptionEn: string | null
    descriptionAr: string | null
    recordDate: Date | null
    count: number | null
    category: string | null
    locationNameEn: string | null
    locationNameAr: string | null
    latitude: number | null
    longitude: number | null
    sourceId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IncidentRecordMaxAggregateOutputType = {
    id: number | null
    weeklySummaryId: number | null
    titleEn: string | null
    titleAr: string | null
    descriptionEn: string | null
    descriptionAr: string | null
    recordDate: Date | null
    count: number | null
    category: string | null
    locationNameEn: string | null
    locationNameAr: string | null
    latitude: number | null
    longitude: number | null
    sourceId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IncidentRecordCountAggregateOutputType = {
    id: number
    weeklySummaryId: number
    titleEn: number
    titleAr: number
    descriptionEn: number
    descriptionAr: number
    recordDate: number
    count: number
    category: number
    locationNameEn: number
    locationNameAr: number
    latitude: number
    longitude: number
    sourceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IncidentRecordAvgAggregateInputType = {
    id?: true
    weeklySummaryId?: true
    count?: true
    latitude?: true
    longitude?: true
    sourceId?: true
  }

  export type IncidentRecordSumAggregateInputType = {
    id?: true
    weeklySummaryId?: true
    count?: true
    latitude?: true
    longitude?: true
    sourceId?: true
  }

  export type IncidentRecordMinAggregateInputType = {
    id?: true
    weeklySummaryId?: true
    titleEn?: true
    titleAr?: true
    descriptionEn?: true
    descriptionAr?: true
    recordDate?: true
    count?: true
    category?: true
    locationNameEn?: true
    locationNameAr?: true
    latitude?: true
    longitude?: true
    sourceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IncidentRecordMaxAggregateInputType = {
    id?: true
    weeklySummaryId?: true
    titleEn?: true
    titleAr?: true
    descriptionEn?: true
    descriptionAr?: true
    recordDate?: true
    count?: true
    category?: true
    locationNameEn?: true
    locationNameAr?: true
    latitude?: true
    longitude?: true
    sourceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IncidentRecordCountAggregateInputType = {
    id?: true
    weeklySummaryId?: true
    titleEn?: true
    titleAr?: true
    descriptionEn?: true
    descriptionAr?: true
    recordDate?: true
    count?: true
    category?: true
    locationNameEn?: true
    locationNameAr?: true
    latitude?: true
    longitude?: true
    sourceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IncidentRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncidentRecord to aggregate.
     */
    where?: IncidentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentRecords to fetch.
     */
    orderBy?: IncidentRecordOrderByWithRelationInput | IncidentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IncidentRecords
    **/
    _count?: true | IncidentRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncidentRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncidentRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentRecordMaxAggregateInputType
  }

  export type GetIncidentRecordAggregateType<T extends IncidentRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateIncidentRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncidentRecord[P]>
      : GetScalarType<T[P], AggregateIncidentRecord[P]>
  }




  export type IncidentRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentRecordWhereInput
    orderBy?: IncidentRecordOrderByWithAggregationInput | IncidentRecordOrderByWithAggregationInput[]
    by: IncidentRecordScalarFieldEnum[] | IncidentRecordScalarFieldEnum
    having?: IncidentRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentRecordCountAggregateInputType | true
    _avg?: IncidentRecordAvgAggregateInputType
    _sum?: IncidentRecordSumAggregateInputType
    _min?: IncidentRecordMinAggregateInputType
    _max?: IncidentRecordMaxAggregateInputType
  }

  export type IncidentRecordGroupByOutputType = {
    id: number
    weeklySummaryId: number
    titleEn: string
    titleAr: string
    descriptionEn: string | null
    descriptionAr: string | null
    recordDate: Date
    count: number
    category: string
    locationNameEn: string | null
    locationNameAr: string | null
    latitude: number | null
    longitude: number | null
    sourceId: number | null
    createdAt: Date
    updatedAt: Date
    _count: IncidentRecordCountAggregateOutputType | null
    _avg: IncidentRecordAvgAggregateOutputType | null
    _sum: IncidentRecordSumAggregateOutputType | null
    _min: IncidentRecordMinAggregateOutputType | null
    _max: IncidentRecordMaxAggregateOutputType | null
  }

  type GetIncidentRecordGroupByPayload<T extends IncidentRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentRecordGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentRecordGroupByOutputType[P]>
        }
      >
    >


  export type IncidentRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weeklySummaryId?: boolean
    titleEn?: boolean
    titleAr?: boolean
    descriptionEn?: boolean
    descriptionAr?: boolean
    recordDate?: boolean
    count?: boolean
    category?: boolean
    locationNameEn?: boolean
    locationNameAr?: boolean
    latitude?: boolean
    longitude?: boolean
    sourceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    weeklySummary?: boolean | WeeklySummaryDefaultArgs<ExtArgs>
    source?: boolean | IncidentRecord$sourceArgs<ExtArgs>
  }, ExtArgs["result"]["incidentRecord"]>

  export type IncidentRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weeklySummaryId?: boolean
    titleEn?: boolean
    titleAr?: boolean
    descriptionEn?: boolean
    descriptionAr?: boolean
    recordDate?: boolean
    count?: boolean
    category?: boolean
    locationNameEn?: boolean
    locationNameAr?: boolean
    latitude?: boolean
    longitude?: boolean
    sourceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    weeklySummary?: boolean | WeeklySummaryDefaultArgs<ExtArgs>
    source?: boolean | IncidentRecord$sourceArgs<ExtArgs>
  }, ExtArgs["result"]["incidentRecord"]>

  export type IncidentRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weeklySummaryId?: boolean
    titleEn?: boolean
    titleAr?: boolean
    descriptionEn?: boolean
    descriptionAr?: boolean
    recordDate?: boolean
    count?: boolean
    category?: boolean
    locationNameEn?: boolean
    locationNameAr?: boolean
    latitude?: boolean
    longitude?: boolean
    sourceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    weeklySummary?: boolean | WeeklySummaryDefaultArgs<ExtArgs>
    source?: boolean | IncidentRecord$sourceArgs<ExtArgs>
  }, ExtArgs["result"]["incidentRecord"]>

  export type IncidentRecordSelectScalar = {
    id?: boolean
    weeklySummaryId?: boolean
    titleEn?: boolean
    titleAr?: boolean
    descriptionEn?: boolean
    descriptionAr?: boolean
    recordDate?: boolean
    count?: boolean
    category?: boolean
    locationNameEn?: boolean
    locationNameAr?: boolean
    latitude?: boolean
    longitude?: boolean
    sourceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IncidentRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "weeklySummaryId" | "titleEn" | "titleAr" | "descriptionEn" | "descriptionAr" | "recordDate" | "count" | "category" | "locationNameEn" | "locationNameAr" | "latitude" | "longitude" | "sourceId" | "createdAt" | "updatedAt", ExtArgs["result"]["incidentRecord"]>
  export type IncidentRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weeklySummary?: boolean | WeeklySummaryDefaultArgs<ExtArgs>
    source?: boolean | IncidentRecord$sourceArgs<ExtArgs>
  }
  export type IncidentRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weeklySummary?: boolean | WeeklySummaryDefaultArgs<ExtArgs>
    source?: boolean | IncidentRecord$sourceArgs<ExtArgs>
  }
  export type IncidentRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weeklySummary?: boolean | WeeklySummaryDefaultArgs<ExtArgs>
    source?: boolean | IncidentRecord$sourceArgs<ExtArgs>
  }

  export type $IncidentRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IncidentRecord"
    objects: {
      weeklySummary: Prisma.$WeeklySummaryPayload<ExtArgs>
      source: Prisma.$SourcePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      weeklySummaryId: number
      titleEn: string
      titleAr: string
      descriptionEn: string | null
      descriptionAr: string | null
      recordDate: Date
      count: number
      category: string
      locationNameEn: string | null
      locationNameAr: string | null
      latitude: number | null
      longitude: number | null
      sourceId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["incidentRecord"]>
    composites: {}
  }

  type IncidentRecordGetPayload<S extends boolean | null | undefined | IncidentRecordDefaultArgs> = $Result.GetResult<Prisma.$IncidentRecordPayload, S>

  type IncidentRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentRecordCountAggregateInputType | true
    }

  export interface IncidentRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IncidentRecord'], meta: { name: 'IncidentRecord' } }
    /**
     * Find zero or one IncidentRecord that matches the filter.
     * @param {IncidentRecordFindUniqueArgs} args - Arguments to find a IncidentRecord
     * @example
     * // Get one IncidentRecord
     * const incidentRecord = await prisma.incidentRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentRecordFindUniqueArgs>(args: SelectSubset<T, IncidentRecordFindUniqueArgs<ExtArgs>>): Prisma__IncidentRecordClient<$Result.GetResult<Prisma.$IncidentRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IncidentRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentRecordFindUniqueOrThrowArgs} args - Arguments to find a IncidentRecord
     * @example
     * // Get one IncidentRecord
     * const incidentRecord = await prisma.incidentRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentRecordClient<$Result.GetResult<Prisma.$IncidentRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncidentRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentRecordFindFirstArgs} args - Arguments to find a IncidentRecord
     * @example
     * // Get one IncidentRecord
     * const incidentRecord = await prisma.incidentRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentRecordFindFirstArgs>(args?: SelectSubset<T, IncidentRecordFindFirstArgs<ExtArgs>>): Prisma__IncidentRecordClient<$Result.GetResult<Prisma.$IncidentRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncidentRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentRecordFindFirstOrThrowArgs} args - Arguments to find a IncidentRecord
     * @example
     * // Get one IncidentRecord
     * const incidentRecord = await prisma.incidentRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentRecordClient<$Result.GetResult<Prisma.$IncidentRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IncidentRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IncidentRecords
     * const incidentRecords = await prisma.incidentRecord.findMany()
     * 
     * // Get first 10 IncidentRecords
     * const incidentRecords = await prisma.incidentRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentRecordWithIdOnly = await prisma.incidentRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentRecordFindManyArgs>(args?: SelectSubset<T, IncidentRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IncidentRecord.
     * @param {IncidentRecordCreateArgs} args - Arguments to create a IncidentRecord.
     * @example
     * // Create one IncidentRecord
     * const IncidentRecord = await prisma.incidentRecord.create({
     *   data: {
     *     // ... data to create a IncidentRecord
     *   }
     * })
     * 
     */
    create<T extends IncidentRecordCreateArgs>(args: SelectSubset<T, IncidentRecordCreateArgs<ExtArgs>>): Prisma__IncidentRecordClient<$Result.GetResult<Prisma.$IncidentRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IncidentRecords.
     * @param {IncidentRecordCreateManyArgs} args - Arguments to create many IncidentRecords.
     * @example
     * // Create many IncidentRecords
     * const incidentRecord = await prisma.incidentRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentRecordCreateManyArgs>(args?: SelectSubset<T, IncidentRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IncidentRecords and returns the data saved in the database.
     * @param {IncidentRecordCreateManyAndReturnArgs} args - Arguments to create many IncidentRecords.
     * @example
     * // Create many IncidentRecords
     * const incidentRecord = await prisma.incidentRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IncidentRecords and only return the `id`
     * const incidentRecordWithIdOnly = await prisma.incidentRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncidentRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, IncidentRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IncidentRecord.
     * @param {IncidentRecordDeleteArgs} args - Arguments to delete one IncidentRecord.
     * @example
     * // Delete one IncidentRecord
     * const IncidentRecord = await prisma.incidentRecord.delete({
     *   where: {
     *     // ... filter to delete one IncidentRecord
     *   }
     * })
     * 
     */
    delete<T extends IncidentRecordDeleteArgs>(args: SelectSubset<T, IncidentRecordDeleteArgs<ExtArgs>>): Prisma__IncidentRecordClient<$Result.GetResult<Prisma.$IncidentRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IncidentRecord.
     * @param {IncidentRecordUpdateArgs} args - Arguments to update one IncidentRecord.
     * @example
     * // Update one IncidentRecord
     * const incidentRecord = await prisma.incidentRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentRecordUpdateArgs>(args: SelectSubset<T, IncidentRecordUpdateArgs<ExtArgs>>): Prisma__IncidentRecordClient<$Result.GetResult<Prisma.$IncidentRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IncidentRecords.
     * @param {IncidentRecordDeleteManyArgs} args - Arguments to filter IncidentRecords to delete.
     * @example
     * // Delete a few IncidentRecords
     * const { count } = await prisma.incidentRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentRecordDeleteManyArgs>(args?: SelectSubset<T, IncidentRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncidentRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IncidentRecords
     * const incidentRecord = await prisma.incidentRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentRecordUpdateManyArgs>(args: SelectSubset<T, IncidentRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncidentRecords and returns the data updated in the database.
     * @param {IncidentRecordUpdateManyAndReturnArgs} args - Arguments to update many IncidentRecords.
     * @example
     * // Update many IncidentRecords
     * const incidentRecord = await prisma.incidentRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IncidentRecords and only return the `id`
     * const incidentRecordWithIdOnly = await prisma.incidentRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IncidentRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, IncidentRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IncidentRecord.
     * @param {IncidentRecordUpsertArgs} args - Arguments to update or create a IncidentRecord.
     * @example
     * // Update or create a IncidentRecord
     * const incidentRecord = await prisma.incidentRecord.upsert({
     *   create: {
     *     // ... data to create a IncidentRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IncidentRecord we want to update
     *   }
     * })
     */
    upsert<T extends IncidentRecordUpsertArgs>(args: SelectSubset<T, IncidentRecordUpsertArgs<ExtArgs>>): Prisma__IncidentRecordClient<$Result.GetResult<Prisma.$IncidentRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IncidentRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentRecordCountArgs} args - Arguments to filter IncidentRecords to count.
     * @example
     * // Count the number of IncidentRecords
     * const count = await prisma.incidentRecord.count({
     *   where: {
     *     // ... the filter for the IncidentRecords we want to count
     *   }
     * })
    **/
    count<T extends IncidentRecordCountArgs>(
      args?: Subset<T, IncidentRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IncidentRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncidentRecordAggregateArgs>(args: Subset<T, IncidentRecordAggregateArgs>): Prisma.PrismaPromise<GetIncidentRecordAggregateType<T>>

    /**
     * Group by IncidentRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IncidentRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentRecordGroupByArgs['orderBy'] }
        : { orderBy?: IncidentRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IncidentRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IncidentRecord model
   */
  readonly fields: IncidentRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IncidentRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    weeklySummary<T extends WeeklySummaryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WeeklySummaryDefaultArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    source<T extends IncidentRecord$sourceArgs<ExtArgs> = {}>(args?: Subset<T, IncidentRecord$sourceArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IncidentRecord model
   */
  interface IncidentRecordFieldRefs {
    readonly id: FieldRef<"IncidentRecord", 'Int'>
    readonly weeklySummaryId: FieldRef<"IncidentRecord", 'Int'>
    readonly titleEn: FieldRef<"IncidentRecord", 'String'>
    readonly titleAr: FieldRef<"IncidentRecord", 'String'>
    readonly descriptionEn: FieldRef<"IncidentRecord", 'String'>
    readonly descriptionAr: FieldRef<"IncidentRecord", 'String'>
    readonly recordDate: FieldRef<"IncidentRecord", 'DateTime'>
    readonly count: FieldRef<"IncidentRecord", 'Int'>
    readonly category: FieldRef<"IncidentRecord", 'String'>
    readonly locationNameEn: FieldRef<"IncidentRecord", 'String'>
    readonly locationNameAr: FieldRef<"IncidentRecord", 'String'>
    readonly latitude: FieldRef<"IncidentRecord", 'Float'>
    readonly longitude: FieldRef<"IncidentRecord", 'Float'>
    readonly sourceId: FieldRef<"IncidentRecord", 'Int'>
    readonly createdAt: FieldRef<"IncidentRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"IncidentRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IncidentRecord findUnique
   */
  export type IncidentRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentRecord
     */
    select?: IncidentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentRecord
     */
    omit?: IncidentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentRecordInclude<ExtArgs> | null
    /**
     * Filter, which IncidentRecord to fetch.
     */
    where: IncidentRecordWhereUniqueInput
  }

  /**
   * IncidentRecord findUniqueOrThrow
   */
  export type IncidentRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentRecord
     */
    select?: IncidentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentRecord
     */
    omit?: IncidentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentRecordInclude<ExtArgs> | null
    /**
     * Filter, which IncidentRecord to fetch.
     */
    where: IncidentRecordWhereUniqueInput
  }

  /**
   * IncidentRecord findFirst
   */
  export type IncidentRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentRecord
     */
    select?: IncidentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentRecord
     */
    omit?: IncidentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentRecordInclude<ExtArgs> | null
    /**
     * Filter, which IncidentRecord to fetch.
     */
    where?: IncidentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentRecords to fetch.
     */
    orderBy?: IncidentRecordOrderByWithRelationInput | IncidentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncidentRecords.
     */
    cursor?: IncidentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncidentRecords.
     */
    distinct?: IncidentRecordScalarFieldEnum | IncidentRecordScalarFieldEnum[]
  }

  /**
   * IncidentRecord findFirstOrThrow
   */
  export type IncidentRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentRecord
     */
    select?: IncidentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentRecord
     */
    omit?: IncidentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentRecordInclude<ExtArgs> | null
    /**
     * Filter, which IncidentRecord to fetch.
     */
    where?: IncidentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentRecords to fetch.
     */
    orderBy?: IncidentRecordOrderByWithRelationInput | IncidentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncidentRecords.
     */
    cursor?: IncidentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncidentRecords.
     */
    distinct?: IncidentRecordScalarFieldEnum | IncidentRecordScalarFieldEnum[]
  }

  /**
   * IncidentRecord findMany
   */
  export type IncidentRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentRecord
     */
    select?: IncidentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentRecord
     */
    omit?: IncidentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentRecordInclude<ExtArgs> | null
    /**
     * Filter, which IncidentRecords to fetch.
     */
    where?: IncidentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentRecords to fetch.
     */
    orderBy?: IncidentRecordOrderByWithRelationInput | IncidentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IncidentRecords.
     */
    cursor?: IncidentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentRecords.
     */
    skip?: number
    distinct?: IncidentRecordScalarFieldEnum | IncidentRecordScalarFieldEnum[]
  }

  /**
   * IncidentRecord create
   */
  export type IncidentRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentRecord
     */
    select?: IncidentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentRecord
     */
    omit?: IncidentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a IncidentRecord.
     */
    data: XOR<IncidentRecordCreateInput, IncidentRecordUncheckedCreateInput>
  }

  /**
   * IncidentRecord createMany
   */
  export type IncidentRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IncidentRecords.
     */
    data: IncidentRecordCreateManyInput | IncidentRecordCreateManyInput[]
  }

  /**
   * IncidentRecord createManyAndReturn
   */
  export type IncidentRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentRecord
     */
    select?: IncidentRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentRecord
     */
    omit?: IncidentRecordOmit<ExtArgs> | null
    /**
     * The data used to create many IncidentRecords.
     */
    data: IncidentRecordCreateManyInput | IncidentRecordCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IncidentRecord update
   */
  export type IncidentRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentRecord
     */
    select?: IncidentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentRecord
     */
    omit?: IncidentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a IncidentRecord.
     */
    data: XOR<IncidentRecordUpdateInput, IncidentRecordUncheckedUpdateInput>
    /**
     * Choose, which IncidentRecord to update.
     */
    where: IncidentRecordWhereUniqueInput
  }

  /**
   * IncidentRecord updateMany
   */
  export type IncidentRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IncidentRecords.
     */
    data: XOR<IncidentRecordUpdateManyMutationInput, IncidentRecordUncheckedUpdateManyInput>
    /**
     * Filter which IncidentRecords to update
     */
    where?: IncidentRecordWhereInput
    /**
     * Limit how many IncidentRecords to update.
     */
    limit?: number
  }

  /**
   * IncidentRecord updateManyAndReturn
   */
  export type IncidentRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentRecord
     */
    select?: IncidentRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentRecord
     */
    omit?: IncidentRecordOmit<ExtArgs> | null
    /**
     * The data used to update IncidentRecords.
     */
    data: XOR<IncidentRecordUpdateManyMutationInput, IncidentRecordUncheckedUpdateManyInput>
    /**
     * Filter which IncidentRecords to update
     */
    where?: IncidentRecordWhereInput
    /**
     * Limit how many IncidentRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IncidentRecord upsert
   */
  export type IncidentRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentRecord
     */
    select?: IncidentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentRecord
     */
    omit?: IncidentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the IncidentRecord to update in case it exists.
     */
    where: IncidentRecordWhereUniqueInput
    /**
     * In case the IncidentRecord found by the `where` argument doesn't exist, create a new IncidentRecord with this data.
     */
    create: XOR<IncidentRecordCreateInput, IncidentRecordUncheckedCreateInput>
    /**
     * In case the IncidentRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentRecordUpdateInput, IncidentRecordUncheckedUpdateInput>
  }

  /**
   * IncidentRecord delete
   */
  export type IncidentRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentRecord
     */
    select?: IncidentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentRecord
     */
    omit?: IncidentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentRecordInclude<ExtArgs> | null
    /**
     * Filter which IncidentRecord to delete.
     */
    where: IncidentRecordWhereUniqueInput
  }

  /**
   * IncidentRecord deleteMany
   */
  export type IncidentRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncidentRecords to delete
     */
    where?: IncidentRecordWhereInput
    /**
     * Limit how many IncidentRecords to delete.
     */
    limit?: number
  }

  /**
   * IncidentRecord.source
   */
  export type IncidentRecord$sourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    where?: SourceWhereInput
  }

  /**
   * IncidentRecord without action
   */
  export type IncidentRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentRecord
     */
    select?: IncidentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentRecord
     */
    omit?: IncidentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentRecordInclude<ExtArgs> | null
  }


  /**
   * Model Source
   */

  export type AggregateSource = {
    _count: SourceCountAggregateOutputType | null
    _avg: SourceAvgAggregateOutputType | null
    _sum: SourceSumAggregateOutputType | null
    _min: SourceMinAggregateOutputType | null
    _max: SourceMaxAggregateOutputType | null
  }

  export type SourceAvgAggregateOutputType = {
    id: number | null
  }

  export type SourceSumAggregateOutputType = {
    id: number | null
  }

  export type SourceMinAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SourceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SourceCountAggregateOutputType = {
    id: number
    name: number
    url: number
    note: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SourceAvgAggregateInputType = {
    id?: true
  }

  export type SourceSumAggregateInputType = {
    id?: true
  }

  export type SourceMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SourceMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SourceCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Source to aggregate.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sources
    **/
    _count?: true | SourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SourceMaxAggregateInputType
  }

  export type GetSourceAggregateType<T extends SourceAggregateArgs> = {
        [P in keyof T & keyof AggregateSource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSource[P]>
      : GetScalarType<T[P], AggregateSource[P]>
  }




  export type SourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceWhereInput
    orderBy?: SourceOrderByWithAggregationInput | SourceOrderByWithAggregationInput[]
    by: SourceScalarFieldEnum[] | SourceScalarFieldEnum
    having?: SourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SourceCountAggregateInputType | true
    _avg?: SourceAvgAggregateInputType
    _sum?: SourceSumAggregateInputType
    _min?: SourceMinAggregateInputType
    _max?: SourceMaxAggregateInputType
  }

  export type SourceGroupByOutputType = {
    id: number
    name: string
    url: string | null
    note: string | null
    createdAt: Date
    updatedAt: Date
    _count: SourceCountAggregateOutputType | null
    _avg: SourceAvgAggregateOutputType | null
    _sum: SourceSumAggregateOutputType | null
    _min: SourceMinAggregateOutputType | null
    _max: SourceMaxAggregateOutputType | null
  }

  type GetSourceGroupByPayload<T extends SourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SourceGroupByOutputType[P]>
            : GetScalarType<T[P], SourceGroupByOutputType[P]>
        }
      >
    >


  export type SourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    incidents?: boolean | Source$incidentsArgs<ExtArgs>
    _count?: boolean | SourceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["source"]>

  export type SourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["source"]>

  export type SourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["source"]>

  export type SourceSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "note" | "createdAt" | "updatedAt", ExtArgs["result"]["source"]>
  export type SourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incidents?: boolean | Source$incidentsArgs<ExtArgs>
    _count?: boolean | SourceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Source"
    objects: {
      incidents: Prisma.$IncidentRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      url: string | null
      note: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["source"]>
    composites: {}
  }

  type SourceGetPayload<S extends boolean | null | undefined | SourceDefaultArgs> = $Result.GetResult<Prisma.$SourcePayload, S>

  type SourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SourceCountAggregateInputType | true
    }

  export interface SourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Source'], meta: { name: 'Source' } }
    /**
     * Find zero or one Source that matches the filter.
     * @param {SourceFindUniqueArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SourceFindUniqueArgs>(args: SelectSubset<T, SourceFindUniqueArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Source that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SourceFindUniqueOrThrowArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SourceFindUniqueOrThrowArgs>(args: SelectSubset<T, SourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Source that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFindFirstArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SourceFindFirstArgs>(args?: SelectSubset<T, SourceFindFirstArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Source that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFindFirstOrThrowArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SourceFindFirstOrThrowArgs>(args?: SelectSubset<T, SourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sources
     * const sources = await prisma.source.findMany()
     * 
     * // Get first 10 Sources
     * const sources = await prisma.source.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sourceWithIdOnly = await prisma.source.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SourceFindManyArgs>(args?: SelectSubset<T, SourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Source.
     * @param {SourceCreateArgs} args - Arguments to create a Source.
     * @example
     * // Create one Source
     * const Source = await prisma.source.create({
     *   data: {
     *     // ... data to create a Source
     *   }
     * })
     * 
     */
    create<T extends SourceCreateArgs>(args: SelectSubset<T, SourceCreateArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sources.
     * @param {SourceCreateManyArgs} args - Arguments to create many Sources.
     * @example
     * // Create many Sources
     * const source = await prisma.source.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SourceCreateManyArgs>(args?: SelectSubset<T, SourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sources and returns the data saved in the database.
     * @param {SourceCreateManyAndReturnArgs} args - Arguments to create many Sources.
     * @example
     * // Create many Sources
     * const source = await prisma.source.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sources and only return the `id`
     * const sourceWithIdOnly = await prisma.source.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SourceCreateManyAndReturnArgs>(args?: SelectSubset<T, SourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Source.
     * @param {SourceDeleteArgs} args - Arguments to delete one Source.
     * @example
     * // Delete one Source
     * const Source = await prisma.source.delete({
     *   where: {
     *     // ... filter to delete one Source
     *   }
     * })
     * 
     */
    delete<T extends SourceDeleteArgs>(args: SelectSubset<T, SourceDeleteArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Source.
     * @param {SourceUpdateArgs} args - Arguments to update one Source.
     * @example
     * // Update one Source
     * const source = await prisma.source.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SourceUpdateArgs>(args: SelectSubset<T, SourceUpdateArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sources.
     * @param {SourceDeleteManyArgs} args - Arguments to filter Sources to delete.
     * @example
     * // Delete a few Sources
     * const { count } = await prisma.source.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SourceDeleteManyArgs>(args?: SelectSubset<T, SourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sources
     * const source = await prisma.source.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SourceUpdateManyArgs>(args: SelectSubset<T, SourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sources and returns the data updated in the database.
     * @param {SourceUpdateManyAndReturnArgs} args - Arguments to update many Sources.
     * @example
     * // Update many Sources
     * const source = await prisma.source.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sources and only return the `id`
     * const sourceWithIdOnly = await prisma.source.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SourceUpdateManyAndReturnArgs>(args: SelectSubset<T, SourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Source.
     * @param {SourceUpsertArgs} args - Arguments to update or create a Source.
     * @example
     * // Update or create a Source
     * const source = await prisma.source.upsert({
     *   create: {
     *     // ... data to create a Source
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Source we want to update
     *   }
     * })
     */
    upsert<T extends SourceUpsertArgs>(args: SelectSubset<T, SourceUpsertArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceCountArgs} args - Arguments to filter Sources to count.
     * @example
     * // Count the number of Sources
     * const count = await prisma.source.count({
     *   where: {
     *     // ... the filter for the Sources we want to count
     *   }
     * })
    **/
    count<T extends SourceCountArgs>(
      args?: Subset<T, SourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Source.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SourceAggregateArgs>(args: Subset<T, SourceAggregateArgs>): Prisma.PrismaPromise<GetSourceAggregateType<T>>

    /**
     * Group by Source.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SourceGroupByArgs['orderBy'] }
        : { orderBy?: SourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Source model
   */
  readonly fields: SourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Source.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    incidents<T extends Source$incidentsArgs<ExtArgs> = {}>(args?: Subset<T, Source$incidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Source model
   */
  interface SourceFieldRefs {
    readonly id: FieldRef<"Source", 'Int'>
    readonly name: FieldRef<"Source", 'String'>
    readonly url: FieldRef<"Source", 'String'>
    readonly note: FieldRef<"Source", 'String'>
    readonly createdAt: FieldRef<"Source", 'DateTime'>
    readonly updatedAt: FieldRef<"Source", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Source findUnique
   */
  export type SourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source findUniqueOrThrow
   */
  export type SourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source findFirst
   */
  export type SourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sources.
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sources.
     */
    distinct?: SourceScalarFieldEnum | SourceScalarFieldEnum[]
  }

  /**
   * Source findFirstOrThrow
   */
  export type SourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sources.
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sources.
     */
    distinct?: SourceScalarFieldEnum | SourceScalarFieldEnum[]
  }

  /**
   * Source findMany
   */
  export type SourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Sources to fetch.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sources.
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    distinct?: SourceScalarFieldEnum | SourceScalarFieldEnum[]
  }

  /**
   * Source create
   */
  export type SourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * The data needed to create a Source.
     */
    data: XOR<SourceCreateInput, SourceUncheckedCreateInput>
  }

  /**
   * Source createMany
   */
  export type SourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sources.
     */
    data: SourceCreateManyInput | SourceCreateManyInput[]
  }

  /**
   * Source createManyAndReturn
   */
  export type SourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * The data used to create many Sources.
     */
    data: SourceCreateManyInput | SourceCreateManyInput[]
  }

  /**
   * Source update
   */
  export type SourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * The data needed to update a Source.
     */
    data: XOR<SourceUpdateInput, SourceUncheckedUpdateInput>
    /**
     * Choose, which Source to update.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source updateMany
   */
  export type SourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sources.
     */
    data: XOR<SourceUpdateManyMutationInput, SourceUncheckedUpdateManyInput>
    /**
     * Filter which Sources to update
     */
    where?: SourceWhereInput
    /**
     * Limit how many Sources to update.
     */
    limit?: number
  }

  /**
   * Source updateManyAndReturn
   */
  export type SourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * The data used to update Sources.
     */
    data: XOR<SourceUpdateManyMutationInput, SourceUncheckedUpdateManyInput>
    /**
     * Filter which Sources to update
     */
    where?: SourceWhereInput
    /**
     * Limit how many Sources to update.
     */
    limit?: number
  }

  /**
   * Source upsert
   */
  export type SourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * The filter to search for the Source to update in case it exists.
     */
    where: SourceWhereUniqueInput
    /**
     * In case the Source found by the `where` argument doesn't exist, create a new Source with this data.
     */
    create: XOR<SourceCreateInput, SourceUncheckedCreateInput>
    /**
     * In case the Source was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SourceUpdateInput, SourceUncheckedUpdateInput>
  }

  /**
   * Source delete
   */
  export type SourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter which Source to delete.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source deleteMany
   */
  export type SourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sources to delete
     */
    where?: SourceWhereInput
    /**
     * Limit how many Sources to delete.
     */
    limit?: number
  }

  /**
   * Source.incidents
   */
  export type Source$incidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentRecord
     */
    select?: IncidentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentRecord
     */
    omit?: IncidentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentRecordInclude<ExtArgs> | null
    where?: IncidentRecordWhereInput
    orderBy?: IncidentRecordOrderByWithRelationInput | IncidentRecordOrderByWithRelationInput[]
    cursor?: IncidentRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentRecordScalarFieldEnum | IncidentRecordScalarFieldEnum[]
  }

  /**
   * Source without action
   */
  export type SourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const WeeklySummaryScalarFieldEnum: {
    id: 'id',
    titleEn: 'titleEn',
    titleAr: 'titleAr',
    subtitleEn: 'subtitleEn',
    subtitleAr: 'subtitleAr',
    weekStart: 'weekStart',
    weekEnd: 'weekEnd',
    totalIncidents: 'totalIncidents',
    dailyAverage: 'dailyAverage',
    maxRangeKm: 'maxRangeKm',
    notesEn: 'notesEn',
    notesAr: 'notesAr',
    coverImageUrl: 'coverImageUrl',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WeeklySummaryScalarFieldEnum = (typeof WeeklySummaryScalarFieldEnum)[keyof typeof WeeklySummaryScalarFieldEnum]


  export const SummaryStatBlockScalarFieldEnum: {
    id: 'id',
    weeklySummaryId: 'weeklySummaryId',
    labelEn: 'labelEn',
    labelAr: 'labelAr',
    value: 'value',
    icon: 'icon',
    displayOrder: 'displayOrder',
    groupName: 'groupName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SummaryStatBlockScalarFieldEnum = (typeof SummaryStatBlockScalarFieldEnum)[keyof typeof SummaryStatBlockScalarFieldEnum]


  export const IncidentRecordScalarFieldEnum: {
    id: 'id',
    weeklySummaryId: 'weeklySummaryId',
    titleEn: 'titleEn',
    titleAr: 'titleAr',
    descriptionEn: 'descriptionEn',
    descriptionAr: 'descriptionAr',
    recordDate: 'recordDate',
    count: 'count',
    category: 'category',
    locationNameEn: 'locationNameEn',
    locationNameAr: 'locationNameAr',
    latitude: 'latitude',
    longitude: 'longitude',
    sourceId: 'sourceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IncidentRecordScalarFieldEnum = (typeof IncidentRecordScalarFieldEnum)[keyof typeof IncidentRecordScalarFieldEnum]


  export const SourceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    note: 'note',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SourceScalarFieldEnum = (typeof SourceScalarFieldEnum)[keyof typeof SourceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'SummaryStatus'
   */
  export type EnumSummaryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SummaryStatus'>
    
  /**
   * Deep Input Types
   */


  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: IntFilter<"AdminUser"> | number
    email?: StringFilter<"AdminUser"> | string
    passwordHash?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    passwordHash?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }, "id" | "email">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _avg?: AdminUserAvgOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
    _sum?: AdminUserSumOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdminUser"> | number
    email?: StringWithAggregatesFilter<"AdminUser"> | string
    passwordHash?: StringWithAggregatesFilter<"AdminUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
  }

  export type WeeklySummaryWhereInput = {
    AND?: WeeklySummaryWhereInput | WeeklySummaryWhereInput[]
    OR?: WeeklySummaryWhereInput[]
    NOT?: WeeklySummaryWhereInput | WeeklySummaryWhereInput[]
    id?: IntFilter<"WeeklySummary"> | number
    titleEn?: StringFilter<"WeeklySummary"> | string
    titleAr?: StringFilter<"WeeklySummary"> | string
    subtitleEn?: StringNullableFilter<"WeeklySummary"> | string | null
    subtitleAr?: StringNullableFilter<"WeeklySummary"> | string | null
    weekStart?: DateTimeFilter<"WeeklySummary"> | Date | string
    weekEnd?: DateTimeFilter<"WeeklySummary"> | Date | string
    totalIncidents?: IntFilter<"WeeklySummary"> | number
    dailyAverage?: FloatFilter<"WeeklySummary"> | number
    maxRangeKm?: FloatNullableFilter<"WeeklySummary"> | number | null
    notesEn?: StringNullableFilter<"WeeklySummary"> | string | null
    notesAr?: StringNullableFilter<"WeeklySummary"> | string | null
    coverImageUrl?: StringNullableFilter<"WeeklySummary"> | string | null
    status?: EnumSummaryStatusFilter<"WeeklySummary"> | $Enums.SummaryStatus
    createdAt?: DateTimeFilter<"WeeklySummary"> | Date | string
    updatedAt?: DateTimeFilter<"WeeklySummary"> | Date | string
    statBlocks?: SummaryStatBlockListRelationFilter
    incidents?: IncidentRecordListRelationFilter
  }

  export type WeeklySummaryOrderByWithRelationInput = {
    id?: SortOrder
    titleEn?: SortOrder
    titleAr?: SortOrder
    subtitleEn?: SortOrderInput | SortOrder
    subtitleAr?: SortOrderInput | SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    totalIncidents?: SortOrder
    dailyAverage?: SortOrder
    maxRangeKm?: SortOrderInput | SortOrder
    notesEn?: SortOrderInput | SortOrder
    notesAr?: SortOrderInput | SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    statBlocks?: SummaryStatBlockOrderByRelationAggregateInput
    incidents?: IncidentRecordOrderByRelationAggregateInput
  }

  export type WeeklySummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WeeklySummaryWhereInput | WeeklySummaryWhereInput[]
    OR?: WeeklySummaryWhereInput[]
    NOT?: WeeklySummaryWhereInput | WeeklySummaryWhereInput[]
    titleEn?: StringFilter<"WeeklySummary"> | string
    titleAr?: StringFilter<"WeeklySummary"> | string
    subtitleEn?: StringNullableFilter<"WeeklySummary"> | string | null
    subtitleAr?: StringNullableFilter<"WeeklySummary"> | string | null
    weekStart?: DateTimeFilter<"WeeklySummary"> | Date | string
    weekEnd?: DateTimeFilter<"WeeklySummary"> | Date | string
    totalIncidents?: IntFilter<"WeeklySummary"> | number
    dailyAverage?: FloatFilter<"WeeklySummary"> | number
    maxRangeKm?: FloatNullableFilter<"WeeklySummary"> | number | null
    notesEn?: StringNullableFilter<"WeeklySummary"> | string | null
    notesAr?: StringNullableFilter<"WeeklySummary"> | string | null
    coverImageUrl?: StringNullableFilter<"WeeklySummary"> | string | null
    status?: EnumSummaryStatusFilter<"WeeklySummary"> | $Enums.SummaryStatus
    createdAt?: DateTimeFilter<"WeeklySummary"> | Date | string
    updatedAt?: DateTimeFilter<"WeeklySummary"> | Date | string
    statBlocks?: SummaryStatBlockListRelationFilter
    incidents?: IncidentRecordListRelationFilter
  }, "id">

  export type WeeklySummaryOrderByWithAggregationInput = {
    id?: SortOrder
    titleEn?: SortOrder
    titleAr?: SortOrder
    subtitleEn?: SortOrderInput | SortOrder
    subtitleAr?: SortOrderInput | SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    totalIncidents?: SortOrder
    dailyAverage?: SortOrder
    maxRangeKm?: SortOrderInput | SortOrder
    notesEn?: SortOrderInput | SortOrder
    notesAr?: SortOrderInput | SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WeeklySummaryCountOrderByAggregateInput
    _avg?: WeeklySummaryAvgOrderByAggregateInput
    _max?: WeeklySummaryMaxOrderByAggregateInput
    _min?: WeeklySummaryMinOrderByAggregateInput
    _sum?: WeeklySummarySumOrderByAggregateInput
  }

  export type WeeklySummaryScalarWhereWithAggregatesInput = {
    AND?: WeeklySummaryScalarWhereWithAggregatesInput | WeeklySummaryScalarWhereWithAggregatesInput[]
    OR?: WeeklySummaryScalarWhereWithAggregatesInput[]
    NOT?: WeeklySummaryScalarWhereWithAggregatesInput | WeeklySummaryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WeeklySummary"> | number
    titleEn?: StringWithAggregatesFilter<"WeeklySummary"> | string
    titleAr?: StringWithAggregatesFilter<"WeeklySummary"> | string
    subtitleEn?: StringNullableWithAggregatesFilter<"WeeklySummary"> | string | null
    subtitleAr?: StringNullableWithAggregatesFilter<"WeeklySummary"> | string | null
    weekStart?: DateTimeWithAggregatesFilter<"WeeklySummary"> | Date | string
    weekEnd?: DateTimeWithAggregatesFilter<"WeeklySummary"> | Date | string
    totalIncidents?: IntWithAggregatesFilter<"WeeklySummary"> | number
    dailyAverage?: FloatWithAggregatesFilter<"WeeklySummary"> | number
    maxRangeKm?: FloatNullableWithAggregatesFilter<"WeeklySummary"> | number | null
    notesEn?: StringNullableWithAggregatesFilter<"WeeklySummary"> | string | null
    notesAr?: StringNullableWithAggregatesFilter<"WeeklySummary"> | string | null
    coverImageUrl?: StringNullableWithAggregatesFilter<"WeeklySummary"> | string | null
    status?: EnumSummaryStatusWithAggregatesFilter<"WeeklySummary"> | $Enums.SummaryStatus
    createdAt?: DateTimeWithAggregatesFilter<"WeeklySummary"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WeeklySummary"> | Date | string
  }

  export type SummaryStatBlockWhereInput = {
    AND?: SummaryStatBlockWhereInput | SummaryStatBlockWhereInput[]
    OR?: SummaryStatBlockWhereInput[]
    NOT?: SummaryStatBlockWhereInput | SummaryStatBlockWhereInput[]
    id?: IntFilter<"SummaryStatBlock"> | number
    weeklySummaryId?: IntFilter<"SummaryStatBlock"> | number
    labelEn?: StringFilter<"SummaryStatBlock"> | string
    labelAr?: StringFilter<"SummaryStatBlock"> | string
    value?: IntFilter<"SummaryStatBlock"> | number
    icon?: StringNullableFilter<"SummaryStatBlock"> | string | null
    displayOrder?: IntFilter<"SummaryStatBlock"> | number
    groupName?: StringNullableFilter<"SummaryStatBlock"> | string | null
    createdAt?: DateTimeFilter<"SummaryStatBlock"> | Date | string
    updatedAt?: DateTimeFilter<"SummaryStatBlock"> | Date | string
    weeklySummary?: XOR<WeeklySummaryScalarRelationFilter, WeeklySummaryWhereInput>
  }

  export type SummaryStatBlockOrderByWithRelationInput = {
    id?: SortOrder
    weeklySummaryId?: SortOrder
    labelEn?: SortOrder
    labelAr?: SortOrder
    value?: SortOrder
    icon?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    groupName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    weeklySummary?: WeeklySummaryOrderByWithRelationInput
  }

  export type SummaryStatBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SummaryStatBlockWhereInput | SummaryStatBlockWhereInput[]
    OR?: SummaryStatBlockWhereInput[]
    NOT?: SummaryStatBlockWhereInput | SummaryStatBlockWhereInput[]
    weeklySummaryId?: IntFilter<"SummaryStatBlock"> | number
    labelEn?: StringFilter<"SummaryStatBlock"> | string
    labelAr?: StringFilter<"SummaryStatBlock"> | string
    value?: IntFilter<"SummaryStatBlock"> | number
    icon?: StringNullableFilter<"SummaryStatBlock"> | string | null
    displayOrder?: IntFilter<"SummaryStatBlock"> | number
    groupName?: StringNullableFilter<"SummaryStatBlock"> | string | null
    createdAt?: DateTimeFilter<"SummaryStatBlock"> | Date | string
    updatedAt?: DateTimeFilter<"SummaryStatBlock"> | Date | string
    weeklySummary?: XOR<WeeklySummaryScalarRelationFilter, WeeklySummaryWhereInput>
  }, "id">

  export type SummaryStatBlockOrderByWithAggregationInput = {
    id?: SortOrder
    weeklySummaryId?: SortOrder
    labelEn?: SortOrder
    labelAr?: SortOrder
    value?: SortOrder
    icon?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    groupName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SummaryStatBlockCountOrderByAggregateInput
    _avg?: SummaryStatBlockAvgOrderByAggregateInput
    _max?: SummaryStatBlockMaxOrderByAggregateInput
    _min?: SummaryStatBlockMinOrderByAggregateInput
    _sum?: SummaryStatBlockSumOrderByAggregateInput
  }

  export type SummaryStatBlockScalarWhereWithAggregatesInput = {
    AND?: SummaryStatBlockScalarWhereWithAggregatesInput | SummaryStatBlockScalarWhereWithAggregatesInput[]
    OR?: SummaryStatBlockScalarWhereWithAggregatesInput[]
    NOT?: SummaryStatBlockScalarWhereWithAggregatesInput | SummaryStatBlockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SummaryStatBlock"> | number
    weeklySummaryId?: IntWithAggregatesFilter<"SummaryStatBlock"> | number
    labelEn?: StringWithAggregatesFilter<"SummaryStatBlock"> | string
    labelAr?: StringWithAggregatesFilter<"SummaryStatBlock"> | string
    value?: IntWithAggregatesFilter<"SummaryStatBlock"> | number
    icon?: StringNullableWithAggregatesFilter<"SummaryStatBlock"> | string | null
    displayOrder?: IntWithAggregatesFilter<"SummaryStatBlock"> | number
    groupName?: StringNullableWithAggregatesFilter<"SummaryStatBlock"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SummaryStatBlock"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SummaryStatBlock"> | Date | string
  }

  export type IncidentRecordWhereInput = {
    AND?: IncidentRecordWhereInput | IncidentRecordWhereInput[]
    OR?: IncidentRecordWhereInput[]
    NOT?: IncidentRecordWhereInput | IncidentRecordWhereInput[]
    id?: IntFilter<"IncidentRecord"> | number
    weeklySummaryId?: IntFilter<"IncidentRecord"> | number
    titleEn?: StringFilter<"IncidentRecord"> | string
    titleAr?: StringFilter<"IncidentRecord"> | string
    descriptionEn?: StringNullableFilter<"IncidentRecord"> | string | null
    descriptionAr?: StringNullableFilter<"IncidentRecord"> | string | null
    recordDate?: DateTimeFilter<"IncidentRecord"> | Date | string
    count?: IntFilter<"IncidentRecord"> | number
    category?: StringFilter<"IncidentRecord"> | string
    locationNameEn?: StringNullableFilter<"IncidentRecord"> | string | null
    locationNameAr?: StringNullableFilter<"IncidentRecord"> | string | null
    latitude?: FloatNullableFilter<"IncidentRecord"> | number | null
    longitude?: FloatNullableFilter<"IncidentRecord"> | number | null
    sourceId?: IntNullableFilter<"IncidentRecord"> | number | null
    createdAt?: DateTimeFilter<"IncidentRecord"> | Date | string
    updatedAt?: DateTimeFilter<"IncidentRecord"> | Date | string
    weeklySummary?: XOR<WeeklySummaryScalarRelationFilter, WeeklySummaryWhereInput>
    source?: XOR<SourceNullableScalarRelationFilter, SourceWhereInput> | null
  }

  export type IncidentRecordOrderByWithRelationInput = {
    id?: SortOrder
    weeklySummaryId?: SortOrder
    titleEn?: SortOrder
    titleAr?: SortOrder
    descriptionEn?: SortOrderInput | SortOrder
    descriptionAr?: SortOrderInput | SortOrder
    recordDate?: SortOrder
    count?: SortOrder
    category?: SortOrder
    locationNameEn?: SortOrderInput | SortOrder
    locationNameAr?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    sourceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    weeklySummary?: WeeklySummaryOrderByWithRelationInput
    source?: SourceOrderByWithRelationInput
  }

  export type IncidentRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IncidentRecordWhereInput | IncidentRecordWhereInput[]
    OR?: IncidentRecordWhereInput[]
    NOT?: IncidentRecordWhereInput | IncidentRecordWhereInput[]
    weeklySummaryId?: IntFilter<"IncidentRecord"> | number
    titleEn?: StringFilter<"IncidentRecord"> | string
    titleAr?: StringFilter<"IncidentRecord"> | string
    descriptionEn?: StringNullableFilter<"IncidentRecord"> | string | null
    descriptionAr?: StringNullableFilter<"IncidentRecord"> | string | null
    recordDate?: DateTimeFilter<"IncidentRecord"> | Date | string
    count?: IntFilter<"IncidentRecord"> | number
    category?: StringFilter<"IncidentRecord"> | string
    locationNameEn?: StringNullableFilter<"IncidentRecord"> | string | null
    locationNameAr?: StringNullableFilter<"IncidentRecord"> | string | null
    latitude?: FloatNullableFilter<"IncidentRecord"> | number | null
    longitude?: FloatNullableFilter<"IncidentRecord"> | number | null
    sourceId?: IntNullableFilter<"IncidentRecord"> | number | null
    createdAt?: DateTimeFilter<"IncidentRecord"> | Date | string
    updatedAt?: DateTimeFilter<"IncidentRecord"> | Date | string
    weeklySummary?: XOR<WeeklySummaryScalarRelationFilter, WeeklySummaryWhereInput>
    source?: XOR<SourceNullableScalarRelationFilter, SourceWhereInput> | null
  }, "id">

  export type IncidentRecordOrderByWithAggregationInput = {
    id?: SortOrder
    weeklySummaryId?: SortOrder
    titleEn?: SortOrder
    titleAr?: SortOrder
    descriptionEn?: SortOrderInput | SortOrder
    descriptionAr?: SortOrderInput | SortOrder
    recordDate?: SortOrder
    count?: SortOrder
    category?: SortOrder
    locationNameEn?: SortOrderInput | SortOrder
    locationNameAr?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    sourceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IncidentRecordCountOrderByAggregateInput
    _avg?: IncidentRecordAvgOrderByAggregateInput
    _max?: IncidentRecordMaxOrderByAggregateInput
    _min?: IncidentRecordMinOrderByAggregateInput
    _sum?: IncidentRecordSumOrderByAggregateInput
  }

  export type IncidentRecordScalarWhereWithAggregatesInput = {
    AND?: IncidentRecordScalarWhereWithAggregatesInput | IncidentRecordScalarWhereWithAggregatesInput[]
    OR?: IncidentRecordScalarWhereWithAggregatesInput[]
    NOT?: IncidentRecordScalarWhereWithAggregatesInput | IncidentRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IncidentRecord"> | number
    weeklySummaryId?: IntWithAggregatesFilter<"IncidentRecord"> | number
    titleEn?: StringWithAggregatesFilter<"IncidentRecord"> | string
    titleAr?: StringWithAggregatesFilter<"IncidentRecord"> | string
    descriptionEn?: StringNullableWithAggregatesFilter<"IncidentRecord"> | string | null
    descriptionAr?: StringNullableWithAggregatesFilter<"IncidentRecord"> | string | null
    recordDate?: DateTimeWithAggregatesFilter<"IncidentRecord"> | Date | string
    count?: IntWithAggregatesFilter<"IncidentRecord"> | number
    category?: StringWithAggregatesFilter<"IncidentRecord"> | string
    locationNameEn?: StringNullableWithAggregatesFilter<"IncidentRecord"> | string | null
    locationNameAr?: StringNullableWithAggregatesFilter<"IncidentRecord"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"IncidentRecord"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"IncidentRecord"> | number | null
    sourceId?: IntNullableWithAggregatesFilter<"IncidentRecord"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"IncidentRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IncidentRecord"> | Date | string
  }

  export type SourceWhereInput = {
    AND?: SourceWhereInput | SourceWhereInput[]
    OR?: SourceWhereInput[]
    NOT?: SourceWhereInput | SourceWhereInput[]
    id?: IntFilter<"Source"> | number
    name?: StringFilter<"Source"> | string
    url?: StringNullableFilter<"Source"> | string | null
    note?: StringNullableFilter<"Source"> | string | null
    createdAt?: DateTimeFilter<"Source"> | Date | string
    updatedAt?: DateTimeFilter<"Source"> | Date | string
    incidents?: IncidentRecordListRelationFilter
  }

  export type SourceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    incidents?: IncidentRecordOrderByRelationAggregateInput
  }

  export type SourceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SourceWhereInput | SourceWhereInput[]
    OR?: SourceWhereInput[]
    NOT?: SourceWhereInput | SourceWhereInput[]
    name?: StringFilter<"Source"> | string
    url?: StringNullableFilter<"Source"> | string | null
    note?: StringNullableFilter<"Source"> | string | null
    createdAt?: DateTimeFilter<"Source"> | Date | string
    updatedAt?: DateTimeFilter<"Source"> | Date | string
    incidents?: IncidentRecordListRelationFilter
  }, "id">

  export type SourceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SourceCountOrderByAggregateInput
    _avg?: SourceAvgOrderByAggregateInput
    _max?: SourceMaxOrderByAggregateInput
    _min?: SourceMinOrderByAggregateInput
    _sum?: SourceSumOrderByAggregateInput
  }

  export type SourceScalarWhereWithAggregatesInput = {
    AND?: SourceScalarWhereWithAggregatesInput | SourceScalarWhereWithAggregatesInput[]
    OR?: SourceScalarWhereWithAggregatesInput[]
    NOT?: SourceScalarWhereWithAggregatesInput | SourceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Source"> | number
    name?: StringWithAggregatesFilter<"Source"> | string
    url?: StringNullableWithAggregatesFilter<"Source"> | string | null
    note?: StringNullableWithAggregatesFilter<"Source"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Source"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Source"> | Date | string
  }

  export type AdminUserCreateInput = {
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUncheckedCreateInput = {
    id?: number
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateManyInput = {
    id?: number
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklySummaryCreateInput = {
    titleEn: string
    titleAr: string
    subtitleEn?: string | null
    subtitleAr?: string | null
    weekStart: Date | string
    weekEnd: Date | string
    totalIncidents: number
    dailyAverage: number
    maxRangeKm?: number | null
    notesEn?: string | null
    notesAr?: string | null
    coverImageUrl?: string | null
    status?: $Enums.SummaryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    statBlocks?: SummaryStatBlockCreateNestedManyWithoutWeeklySummaryInput
    incidents?: IncidentRecordCreateNestedManyWithoutWeeklySummaryInput
  }

  export type WeeklySummaryUncheckedCreateInput = {
    id?: number
    titleEn: string
    titleAr: string
    subtitleEn?: string | null
    subtitleAr?: string | null
    weekStart: Date | string
    weekEnd: Date | string
    totalIncidents: number
    dailyAverage: number
    maxRangeKm?: number | null
    notesEn?: string | null
    notesAr?: string | null
    coverImageUrl?: string | null
    status?: $Enums.SummaryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    statBlocks?: SummaryStatBlockUncheckedCreateNestedManyWithoutWeeklySummaryInput
    incidents?: IncidentRecordUncheckedCreateNestedManyWithoutWeeklySummaryInput
  }

  export type WeeklySummaryUpdateInput = {
    titleEn?: StringFieldUpdateOperationsInput | string
    titleAr?: StringFieldUpdateOperationsInput | string
    subtitleEn?: NullableStringFieldUpdateOperationsInput | string | null
    subtitleAr?: NullableStringFieldUpdateOperationsInput | string | null
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalIncidents?: IntFieldUpdateOperationsInput | number
    dailyAverage?: FloatFieldUpdateOperationsInput | number
    maxRangeKm?: NullableFloatFieldUpdateOperationsInput | number | null
    notesEn?: NullableStringFieldUpdateOperationsInput | string | null
    notesAr?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSummaryStatusFieldUpdateOperationsInput | $Enums.SummaryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statBlocks?: SummaryStatBlockUpdateManyWithoutWeeklySummaryNestedInput
    incidents?: IncidentRecordUpdateManyWithoutWeeklySummaryNestedInput
  }

  export type WeeklySummaryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleEn?: StringFieldUpdateOperationsInput | string
    titleAr?: StringFieldUpdateOperationsInput | string
    subtitleEn?: NullableStringFieldUpdateOperationsInput | string | null
    subtitleAr?: NullableStringFieldUpdateOperationsInput | string | null
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalIncidents?: IntFieldUpdateOperationsInput | number
    dailyAverage?: FloatFieldUpdateOperationsInput | number
    maxRangeKm?: NullableFloatFieldUpdateOperationsInput | number | null
    notesEn?: NullableStringFieldUpdateOperationsInput | string | null
    notesAr?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSummaryStatusFieldUpdateOperationsInput | $Enums.SummaryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statBlocks?: SummaryStatBlockUncheckedUpdateManyWithoutWeeklySummaryNestedInput
    incidents?: IncidentRecordUncheckedUpdateManyWithoutWeeklySummaryNestedInput
  }

  export type WeeklySummaryCreateManyInput = {
    id?: number
    titleEn: string
    titleAr: string
    subtitleEn?: string | null
    subtitleAr?: string | null
    weekStart: Date | string
    weekEnd: Date | string
    totalIncidents: number
    dailyAverage: number
    maxRangeKm?: number | null
    notesEn?: string | null
    notesAr?: string | null
    coverImageUrl?: string | null
    status?: $Enums.SummaryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeeklySummaryUpdateManyMutationInput = {
    titleEn?: StringFieldUpdateOperationsInput | string
    titleAr?: StringFieldUpdateOperationsInput | string
    subtitleEn?: NullableStringFieldUpdateOperationsInput | string | null
    subtitleAr?: NullableStringFieldUpdateOperationsInput | string | null
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalIncidents?: IntFieldUpdateOperationsInput | number
    dailyAverage?: FloatFieldUpdateOperationsInput | number
    maxRangeKm?: NullableFloatFieldUpdateOperationsInput | number | null
    notesEn?: NullableStringFieldUpdateOperationsInput | string | null
    notesAr?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSummaryStatusFieldUpdateOperationsInput | $Enums.SummaryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklySummaryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleEn?: StringFieldUpdateOperationsInput | string
    titleAr?: StringFieldUpdateOperationsInput | string
    subtitleEn?: NullableStringFieldUpdateOperationsInput | string | null
    subtitleAr?: NullableStringFieldUpdateOperationsInput | string | null
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalIncidents?: IntFieldUpdateOperationsInput | number
    dailyAverage?: FloatFieldUpdateOperationsInput | number
    maxRangeKm?: NullableFloatFieldUpdateOperationsInput | number | null
    notesEn?: NullableStringFieldUpdateOperationsInput | string | null
    notesAr?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSummaryStatusFieldUpdateOperationsInput | $Enums.SummaryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryStatBlockCreateInput = {
    labelEn: string
    labelAr: string
    value: number
    icon?: string | null
    displayOrder?: number
    groupName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    weeklySummary: WeeklySummaryCreateNestedOneWithoutStatBlocksInput
  }

  export type SummaryStatBlockUncheckedCreateInput = {
    id?: number
    weeklySummaryId: number
    labelEn: string
    labelAr: string
    value: number
    icon?: string | null
    displayOrder?: number
    groupName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SummaryStatBlockUpdateInput = {
    labelEn?: StringFieldUpdateOperationsInput | string
    labelAr?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weeklySummary?: WeeklySummaryUpdateOneRequiredWithoutStatBlocksNestedInput
  }

  export type SummaryStatBlockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    weeklySummaryId?: IntFieldUpdateOperationsInput | number
    labelEn?: StringFieldUpdateOperationsInput | string
    labelAr?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryStatBlockCreateManyInput = {
    id?: number
    weeklySummaryId: number
    labelEn: string
    labelAr: string
    value: number
    icon?: string | null
    displayOrder?: number
    groupName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SummaryStatBlockUpdateManyMutationInput = {
    labelEn?: StringFieldUpdateOperationsInput | string
    labelAr?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryStatBlockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    weeklySummaryId?: IntFieldUpdateOperationsInput | number
    labelEn?: StringFieldUpdateOperationsInput | string
    labelAr?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentRecordCreateInput = {
    titleEn: string
    titleAr: string
    descriptionEn?: string | null
    descriptionAr?: string | null
    recordDate: Date | string
    count?: number
    category: string
    locationNameEn?: string | null
    locationNameAr?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    weeklySummary: WeeklySummaryCreateNestedOneWithoutIncidentsInput
    source?: SourceCreateNestedOneWithoutIncidentsInput
  }

  export type IncidentRecordUncheckedCreateInput = {
    id?: number
    weeklySummaryId: number
    titleEn: string
    titleAr: string
    descriptionEn?: string | null
    descriptionAr?: string | null
    recordDate: Date | string
    count?: number
    category: string
    locationNameEn?: string | null
    locationNameAr?: string | null
    latitude?: number | null
    longitude?: number | null
    sourceId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentRecordUpdateInput = {
    titleEn?: StringFieldUpdateOperationsInput | string
    titleAr?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionAr?: NullableStringFieldUpdateOperationsInput | string | null
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    locationNameEn?: NullableStringFieldUpdateOperationsInput | string | null
    locationNameAr?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weeklySummary?: WeeklySummaryUpdateOneRequiredWithoutIncidentsNestedInput
    source?: SourceUpdateOneWithoutIncidentsNestedInput
  }

  export type IncidentRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    weeklySummaryId?: IntFieldUpdateOperationsInput | number
    titleEn?: StringFieldUpdateOperationsInput | string
    titleAr?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionAr?: NullableStringFieldUpdateOperationsInput | string | null
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    locationNameEn?: NullableStringFieldUpdateOperationsInput | string | null
    locationNameAr?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    sourceId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentRecordCreateManyInput = {
    id?: number
    weeklySummaryId: number
    titleEn: string
    titleAr: string
    descriptionEn?: string | null
    descriptionAr?: string | null
    recordDate: Date | string
    count?: number
    category: string
    locationNameEn?: string | null
    locationNameAr?: string | null
    latitude?: number | null
    longitude?: number | null
    sourceId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentRecordUpdateManyMutationInput = {
    titleEn?: StringFieldUpdateOperationsInput | string
    titleAr?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionAr?: NullableStringFieldUpdateOperationsInput | string | null
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    locationNameEn?: NullableStringFieldUpdateOperationsInput | string | null
    locationNameAr?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    weeklySummaryId?: IntFieldUpdateOperationsInput | number
    titleEn?: StringFieldUpdateOperationsInput | string
    titleAr?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionAr?: NullableStringFieldUpdateOperationsInput | string | null
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    locationNameEn?: NullableStringFieldUpdateOperationsInput | string | null
    locationNameAr?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    sourceId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceCreateInput = {
    name: string
    url?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    incidents?: IncidentRecordCreateNestedManyWithoutSourceInput
  }

  export type SourceUncheckedCreateInput = {
    id?: number
    name: string
    url?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    incidents?: IncidentRecordUncheckedCreateNestedManyWithoutSourceInput
  }

  export type SourceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentRecordUpdateManyWithoutSourceNestedInput
  }

  export type SourceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentRecordUncheckedUpdateManyWithoutSourceNestedInput
  }

  export type SourceCreateManyInput = {
    id?: number
    name: string
    url?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumSummaryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SummaryStatus | EnumSummaryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SummaryStatus[]
    notIn?: $Enums.SummaryStatus[]
    not?: NestedEnumSummaryStatusFilter<$PrismaModel> | $Enums.SummaryStatus
  }

  export type SummaryStatBlockListRelationFilter = {
    every?: SummaryStatBlockWhereInput
    some?: SummaryStatBlockWhereInput
    none?: SummaryStatBlockWhereInput
  }

  export type IncidentRecordListRelationFilter = {
    every?: IncidentRecordWhereInput
    some?: IncidentRecordWhereInput
    none?: IncidentRecordWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SummaryStatBlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncidentRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeeklySummaryCountOrderByAggregateInput = {
    id?: SortOrder
    titleEn?: SortOrder
    titleAr?: SortOrder
    subtitleEn?: SortOrder
    subtitleAr?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    totalIncidents?: SortOrder
    dailyAverage?: SortOrder
    maxRangeKm?: SortOrder
    notesEn?: SortOrder
    notesAr?: SortOrder
    coverImageUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeeklySummaryAvgOrderByAggregateInput = {
    id?: SortOrder
    totalIncidents?: SortOrder
    dailyAverage?: SortOrder
    maxRangeKm?: SortOrder
  }

  export type WeeklySummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    titleEn?: SortOrder
    titleAr?: SortOrder
    subtitleEn?: SortOrder
    subtitleAr?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    totalIncidents?: SortOrder
    dailyAverage?: SortOrder
    maxRangeKm?: SortOrder
    notesEn?: SortOrder
    notesAr?: SortOrder
    coverImageUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeeklySummaryMinOrderByAggregateInput = {
    id?: SortOrder
    titleEn?: SortOrder
    titleAr?: SortOrder
    subtitleEn?: SortOrder
    subtitleAr?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    totalIncidents?: SortOrder
    dailyAverage?: SortOrder
    maxRangeKm?: SortOrder
    notesEn?: SortOrder
    notesAr?: SortOrder
    coverImageUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeeklySummarySumOrderByAggregateInput = {
    id?: SortOrder
    totalIncidents?: SortOrder
    dailyAverage?: SortOrder
    maxRangeKm?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumSummaryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SummaryStatus | EnumSummaryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SummaryStatus[]
    notIn?: $Enums.SummaryStatus[]
    not?: NestedEnumSummaryStatusWithAggregatesFilter<$PrismaModel> | $Enums.SummaryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSummaryStatusFilter<$PrismaModel>
    _max?: NestedEnumSummaryStatusFilter<$PrismaModel>
  }

  export type WeeklySummaryScalarRelationFilter = {
    is?: WeeklySummaryWhereInput
    isNot?: WeeklySummaryWhereInput
  }

  export type SummaryStatBlockCountOrderByAggregateInput = {
    id?: SortOrder
    weeklySummaryId?: SortOrder
    labelEn?: SortOrder
    labelAr?: SortOrder
    value?: SortOrder
    icon?: SortOrder
    displayOrder?: SortOrder
    groupName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SummaryStatBlockAvgOrderByAggregateInput = {
    id?: SortOrder
    weeklySummaryId?: SortOrder
    value?: SortOrder
    displayOrder?: SortOrder
  }

  export type SummaryStatBlockMaxOrderByAggregateInput = {
    id?: SortOrder
    weeklySummaryId?: SortOrder
    labelEn?: SortOrder
    labelAr?: SortOrder
    value?: SortOrder
    icon?: SortOrder
    displayOrder?: SortOrder
    groupName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SummaryStatBlockMinOrderByAggregateInput = {
    id?: SortOrder
    weeklySummaryId?: SortOrder
    labelEn?: SortOrder
    labelAr?: SortOrder
    value?: SortOrder
    icon?: SortOrder
    displayOrder?: SortOrder
    groupName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SummaryStatBlockSumOrderByAggregateInput = {
    id?: SortOrder
    weeklySummaryId?: SortOrder
    value?: SortOrder
    displayOrder?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SourceNullableScalarRelationFilter = {
    is?: SourceWhereInput | null
    isNot?: SourceWhereInput | null
  }

  export type IncidentRecordCountOrderByAggregateInput = {
    id?: SortOrder
    weeklySummaryId?: SortOrder
    titleEn?: SortOrder
    titleAr?: SortOrder
    descriptionEn?: SortOrder
    descriptionAr?: SortOrder
    recordDate?: SortOrder
    count?: SortOrder
    category?: SortOrder
    locationNameEn?: SortOrder
    locationNameAr?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    sourceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncidentRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    weeklySummaryId?: SortOrder
    count?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    sourceId?: SortOrder
  }

  export type IncidentRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    weeklySummaryId?: SortOrder
    titleEn?: SortOrder
    titleAr?: SortOrder
    descriptionEn?: SortOrder
    descriptionAr?: SortOrder
    recordDate?: SortOrder
    count?: SortOrder
    category?: SortOrder
    locationNameEn?: SortOrder
    locationNameAr?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    sourceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncidentRecordMinOrderByAggregateInput = {
    id?: SortOrder
    weeklySummaryId?: SortOrder
    titleEn?: SortOrder
    titleAr?: SortOrder
    descriptionEn?: SortOrder
    descriptionAr?: SortOrder
    recordDate?: SortOrder
    count?: SortOrder
    category?: SortOrder
    locationNameEn?: SortOrder
    locationNameAr?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    sourceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncidentRecordSumOrderByAggregateInput = {
    id?: SortOrder
    weeklySummaryId?: SortOrder
    count?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    sourceId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SourceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SourceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SourceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SourceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SourceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SummaryStatBlockCreateNestedManyWithoutWeeklySummaryInput = {
    create?: XOR<SummaryStatBlockCreateWithoutWeeklySummaryInput, SummaryStatBlockUncheckedCreateWithoutWeeklySummaryInput> | SummaryStatBlockCreateWithoutWeeklySummaryInput[] | SummaryStatBlockUncheckedCreateWithoutWeeklySummaryInput[]
    connectOrCreate?: SummaryStatBlockCreateOrConnectWithoutWeeklySummaryInput | SummaryStatBlockCreateOrConnectWithoutWeeklySummaryInput[]
    createMany?: SummaryStatBlockCreateManyWeeklySummaryInputEnvelope
    connect?: SummaryStatBlockWhereUniqueInput | SummaryStatBlockWhereUniqueInput[]
  }

  export type IncidentRecordCreateNestedManyWithoutWeeklySummaryInput = {
    create?: XOR<IncidentRecordCreateWithoutWeeklySummaryInput, IncidentRecordUncheckedCreateWithoutWeeklySummaryInput> | IncidentRecordCreateWithoutWeeklySummaryInput[] | IncidentRecordUncheckedCreateWithoutWeeklySummaryInput[]
    connectOrCreate?: IncidentRecordCreateOrConnectWithoutWeeklySummaryInput | IncidentRecordCreateOrConnectWithoutWeeklySummaryInput[]
    createMany?: IncidentRecordCreateManyWeeklySummaryInputEnvelope
    connect?: IncidentRecordWhereUniqueInput | IncidentRecordWhereUniqueInput[]
  }

  export type SummaryStatBlockUncheckedCreateNestedManyWithoutWeeklySummaryInput = {
    create?: XOR<SummaryStatBlockCreateWithoutWeeklySummaryInput, SummaryStatBlockUncheckedCreateWithoutWeeklySummaryInput> | SummaryStatBlockCreateWithoutWeeklySummaryInput[] | SummaryStatBlockUncheckedCreateWithoutWeeklySummaryInput[]
    connectOrCreate?: SummaryStatBlockCreateOrConnectWithoutWeeklySummaryInput | SummaryStatBlockCreateOrConnectWithoutWeeklySummaryInput[]
    createMany?: SummaryStatBlockCreateManyWeeklySummaryInputEnvelope
    connect?: SummaryStatBlockWhereUniqueInput | SummaryStatBlockWhereUniqueInput[]
  }

  export type IncidentRecordUncheckedCreateNestedManyWithoutWeeklySummaryInput = {
    create?: XOR<IncidentRecordCreateWithoutWeeklySummaryInput, IncidentRecordUncheckedCreateWithoutWeeklySummaryInput> | IncidentRecordCreateWithoutWeeklySummaryInput[] | IncidentRecordUncheckedCreateWithoutWeeklySummaryInput[]
    connectOrCreate?: IncidentRecordCreateOrConnectWithoutWeeklySummaryInput | IncidentRecordCreateOrConnectWithoutWeeklySummaryInput[]
    createMany?: IncidentRecordCreateManyWeeklySummaryInputEnvelope
    connect?: IncidentRecordWhereUniqueInput | IncidentRecordWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSummaryStatusFieldUpdateOperationsInput = {
    set?: $Enums.SummaryStatus
  }

  export type SummaryStatBlockUpdateManyWithoutWeeklySummaryNestedInput = {
    create?: XOR<SummaryStatBlockCreateWithoutWeeklySummaryInput, SummaryStatBlockUncheckedCreateWithoutWeeklySummaryInput> | SummaryStatBlockCreateWithoutWeeklySummaryInput[] | SummaryStatBlockUncheckedCreateWithoutWeeklySummaryInput[]
    connectOrCreate?: SummaryStatBlockCreateOrConnectWithoutWeeklySummaryInput | SummaryStatBlockCreateOrConnectWithoutWeeklySummaryInput[]
    upsert?: SummaryStatBlockUpsertWithWhereUniqueWithoutWeeklySummaryInput | SummaryStatBlockUpsertWithWhereUniqueWithoutWeeklySummaryInput[]
    createMany?: SummaryStatBlockCreateManyWeeklySummaryInputEnvelope
    set?: SummaryStatBlockWhereUniqueInput | SummaryStatBlockWhereUniqueInput[]
    disconnect?: SummaryStatBlockWhereUniqueInput | SummaryStatBlockWhereUniqueInput[]
    delete?: SummaryStatBlockWhereUniqueInput | SummaryStatBlockWhereUniqueInput[]
    connect?: SummaryStatBlockWhereUniqueInput | SummaryStatBlockWhereUniqueInput[]
    update?: SummaryStatBlockUpdateWithWhereUniqueWithoutWeeklySummaryInput | SummaryStatBlockUpdateWithWhereUniqueWithoutWeeklySummaryInput[]
    updateMany?: SummaryStatBlockUpdateManyWithWhereWithoutWeeklySummaryInput | SummaryStatBlockUpdateManyWithWhereWithoutWeeklySummaryInput[]
    deleteMany?: SummaryStatBlockScalarWhereInput | SummaryStatBlockScalarWhereInput[]
  }

  export type IncidentRecordUpdateManyWithoutWeeklySummaryNestedInput = {
    create?: XOR<IncidentRecordCreateWithoutWeeklySummaryInput, IncidentRecordUncheckedCreateWithoutWeeklySummaryInput> | IncidentRecordCreateWithoutWeeklySummaryInput[] | IncidentRecordUncheckedCreateWithoutWeeklySummaryInput[]
    connectOrCreate?: IncidentRecordCreateOrConnectWithoutWeeklySummaryInput | IncidentRecordCreateOrConnectWithoutWeeklySummaryInput[]
    upsert?: IncidentRecordUpsertWithWhereUniqueWithoutWeeklySummaryInput | IncidentRecordUpsertWithWhereUniqueWithoutWeeklySummaryInput[]
    createMany?: IncidentRecordCreateManyWeeklySummaryInputEnvelope
    set?: IncidentRecordWhereUniqueInput | IncidentRecordWhereUniqueInput[]
    disconnect?: IncidentRecordWhereUniqueInput | IncidentRecordWhereUniqueInput[]
    delete?: IncidentRecordWhereUniqueInput | IncidentRecordWhereUniqueInput[]
    connect?: IncidentRecordWhereUniqueInput | IncidentRecordWhereUniqueInput[]
    update?: IncidentRecordUpdateWithWhereUniqueWithoutWeeklySummaryInput | IncidentRecordUpdateWithWhereUniqueWithoutWeeklySummaryInput[]
    updateMany?: IncidentRecordUpdateManyWithWhereWithoutWeeklySummaryInput | IncidentRecordUpdateManyWithWhereWithoutWeeklySummaryInput[]
    deleteMany?: IncidentRecordScalarWhereInput | IncidentRecordScalarWhereInput[]
  }

  export type SummaryStatBlockUncheckedUpdateManyWithoutWeeklySummaryNestedInput = {
    create?: XOR<SummaryStatBlockCreateWithoutWeeklySummaryInput, SummaryStatBlockUncheckedCreateWithoutWeeklySummaryInput> | SummaryStatBlockCreateWithoutWeeklySummaryInput[] | SummaryStatBlockUncheckedCreateWithoutWeeklySummaryInput[]
    connectOrCreate?: SummaryStatBlockCreateOrConnectWithoutWeeklySummaryInput | SummaryStatBlockCreateOrConnectWithoutWeeklySummaryInput[]
    upsert?: SummaryStatBlockUpsertWithWhereUniqueWithoutWeeklySummaryInput | SummaryStatBlockUpsertWithWhereUniqueWithoutWeeklySummaryInput[]
    createMany?: SummaryStatBlockCreateManyWeeklySummaryInputEnvelope
    set?: SummaryStatBlockWhereUniqueInput | SummaryStatBlockWhereUniqueInput[]
    disconnect?: SummaryStatBlockWhereUniqueInput | SummaryStatBlockWhereUniqueInput[]
    delete?: SummaryStatBlockWhereUniqueInput | SummaryStatBlockWhereUniqueInput[]
    connect?: SummaryStatBlockWhereUniqueInput | SummaryStatBlockWhereUniqueInput[]
    update?: SummaryStatBlockUpdateWithWhereUniqueWithoutWeeklySummaryInput | SummaryStatBlockUpdateWithWhereUniqueWithoutWeeklySummaryInput[]
    updateMany?: SummaryStatBlockUpdateManyWithWhereWithoutWeeklySummaryInput | SummaryStatBlockUpdateManyWithWhereWithoutWeeklySummaryInput[]
    deleteMany?: SummaryStatBlockScalarWhereInput | SummaryStatBlockScalarWhereInput[]
  }

  export type IncidentRecordUncheckedUpdateManyWithoutWeeklySummaryNestedInput = {
    create?: XOR<IncidentRecordCreateWithoutWeeklySummaryInput, IncidentRecordUncheckedCreateWithoutWeeklySummaryInput> | IncidentRecordCreateWithoutWeeklySummaryInput[] | IncidentRecordUncheckedCreateWithoutWeeklySummaryInput[]
    connectOrCreate?: IncidentRecordCreateOrConnectWithoutWeeklySummaryInput | IncidentRecordCreateOrConnectWithoutWeeklySummaryInput[]
    upsert?: IncidentRecordUpsertWithWhereUniqueWithoutWeeklySummaryInput | IncidentRecordUpsertWithWhereUniqueWithoutWeeklySummaryInput[]
    createMany?: IncidentRecordCreateManyWeeklySummaryInputEnvelope
    set?: IncidentRecordWhereUniqueInput | IncidentRecordWhereUniqueInput[]
    disconnect?: IncidentRecordWhereUniqueInput | IncidentRecordWhereUniqueInput[]
    delete?: IncidentRecordWhereUniqueInput | IncidentRecordWhereUniqueInput[]
    connect?: IncidentRecordWhereUniqueInput | IncidentRecordWhereUniqueInput[]
    update?: IncidentRecordUpdateWithWhereUniqueWithoutWeeklySummaryInput | IncidentRecordUpdateWithWhereUniqueWithoutWeeklySummaryInput[]
    updateMany?: IncidentRecordUpdateManyWithWhereWithoutWeeklySummaryInput | IncidentRecordUpdateManyWithWhereWithoutWeeklySummaryInput[]
    deleteMany?: IncidentRecordScalarWhereInput | IncidentRecordScalarWhereInput[]
  }

  export type WeeklySummaryCreateNestedOneWithoutStatBlocksInput = {
    create?: XOR<WeeklySummaryCreateWithoutStatBlocksInput, WeeklySummaryUncheckedCreateWithoutStatBlocksInput>
    connectOrCreate?: WeeklySummaryCreateOrConnectWithoutStatBlocksInput
    connect?: WeeklySummaryWhereUniqueInput
  }

  export type WeeklySummaryUpdateOneRequiredWithoutStatBlocksNestedInput = {
    create?: XOR<WeeklySummaryCreateWithoutStatBlocksInput, WeeklySummaryUncheckedCreateWithoutStatBlocksInput>
    connectOrCreate?: WeeklySummaryCreateOrConnectWithoutStatBlocksInput
    upsert?: WeeklySummaryUpsertWithoutStatBlocksInput
    connect?: WeeklySummaryWhereUniqueInput
    update?: XOR<XOR<WeeklySummaryUpdateToOneWithWhereWithoutStatBlocksInput, WeeklySummaryUpdateWithoutStatBlocksInput>, WeeklySummaryUncheckedUpdateWithoutStatBlocksInput>
  }

  export type WeeklySummaryCreateNestedOneWithoutIncidentsInput = {
    create?: XOR<WeeklySummaryCreateWithoutIncidentsInput, WeeklySummaryUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: WeeklySummaryCreateOrConnectWithoutIncidentsInput
    connect?: WeeklySummaryWhereUniqueInput
  }

  export type SourceCreateNestedOneWithoutIncidentsInput = {
    create?: XOR<SourceCreateWithoutIncidentsInput, SourceUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: SourceCreateOrConnectWithoutIncidentsInput
    connect?: SourceWhereUniqueInput
  }

  export type WeeklySummaryUpdateOneRequiredWithoutIncidentsNestedInput = {
    create?: XOR<WeeklySummaryCreateWithoutIncidentsInput, WeeklySummaryUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: WeeklySummaryCreateOrConnectWithoutIncidentsInput
    upsert?: WeeklySummaryUpsertWithoutIncidentsInput
    connect?: WeeklySummaryWhereUniqueInput
    update?: XOR<XOR<WeeklySummaryUpdateToOneWithWhereWithoutIncidentsInput, WeeklySummaryUpdateWithoutIncidentsInput>, WeeklySummaryUncheckedUpdateWithoutIncidentsInput>
  }

  export type SourceUpdateOneWithoutIncidentsNestedInput = {
    create?: XOR<SourceCreateWithoutIncidentsInput, SourceUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: SourceCreateOrConnectWithoutIncidentsInput
    upsert?: SourceUpsertWithoutIncidentsInput
    disconnect?: SourceWhereInput | boolean
    delete?: SourceWhereInput | boolean
    connect?: SourceWhereUniqueInput
    update?: XOR<XOR<SourceUpdateToOneWithWhereWithoutIncidentsInput, SourceUpdateWithoutIncidentsInput>, SourceUncheckedUpdateWithoutIncidentsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IncidentRecordCreateNestedManyWithoutSourceInput = {
    create?: XOR<IncidentRecordCreateWithoutSourceInput, IncidentRecordUncheckedCreateWithoutSourceInput> | IncidentRecordCreateWithoutSourceInput[] | IncidentRecordUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: IncidentRecordCreateOrConnectWithoutSourceInput | IncidentRecordCreateOrConnectWithoutSourceInput[]
    createMany?: IncidentRecordCreateManySourceInputEnvelope
    connect?: IncidentRecordWhereUniqueInput | IncidentRecordWhereUniqueInput[]
  }

  export type IncidentRecordUncheckedCreateNestedManyWithoutSourceInput = {
    create?: XOR<IncidentRecordCreateWithoutSourceInput, IncidentRecordUncheckedCreateWithoutSourceInput> | IncidentRecordCreateWithoutSourceInput[] | IncidentRecordUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: IncidentRecordCreateOrConnectWithoutSourceInput | IncidentRecordCreateOrConnectWithoutSourceInput[]
    createMany?: IncidentRecordCreateManySourceInputEnvelope
    connect?: IncidentRecordWhereUniqueInput | IncidentRecordWhereUniqueInput[]
  }

  export type IncidentRecordUpdateManyWithoutSourceNestedInput = {
    create?: XOR<IncidentRecordCreateWithoutSourceInput, IncidentRecordUncheckedCreateWithoutSourceInput> | IncidentRecordCreateWithoutSourceInput[] | IncidentRecordUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: IncidentRecordCreateOrConnectWithoutSourceInput | IncidentRecordCreateOrConnectWithoutSourceInput[]
    upsert?: IncidentRecordUpsertWithWhereUniqueWithoutSourceInput | IncidentRecordUpsertWithWhereUniqueWithoutSourceInput[]
    createMany?: IncidentRecordCreateManySourceInputEnvelope
    set?: IncidentRecordWhereUniqueInput | IncidentRecordWhereUniqueInput[]
    disconnect?: IncidentRecordWhereUniqueInput | IncidentRecordWhereUniqueInput[]
    delete?: IncidentRecordWhereUniqueInput | IncidentRecordWhereUniqueInput[]
    connect?: IncidentRecordWhereUniqueInput | IncidentRecordWhereUniqueInput[]
    update?: IncidentRecordUpdateWithWhereUniqueWithoutSourceInput | IncidentRecordUpdateWithWhereUniqueWithoutSourceInput[]
    updateMany?: IncidentRecordUpdateManyWithWhereWithoutSourceInput | IncidentRecordUpdateManyWithWhereWithoutSourceInput[]
    deleteMany?: IncidentRecordScalarWhereInput | IncidentRecordScalarWhereInput[]
  }

  export type IncidentRecordUncheckedUpdateManyWithoutSourceNestedInput = {
    create?: XOR<IncidentRecordCreateWithoutSourceInput, IncidentRecordUncheckedCreateWithoutSourceInput> | IncidentRecordCreateWithoutSourceInput[] | IncidentRecordUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: IncidentRecordCreateOrConnectWithoutSourceInput | IncidentRecordCreateOrConnectWithoutSourceInput[]
    upsert?: IncidentRecordUpsertWithWhereUniqueWithoutSourceInput | IncidentRecordUpsertWithWhereUniqueWithoutSourceInput[]
    createMany?: IncidentRecordCreateManySourceInputEnvelope
    set?: IncidentRecordWhereUniqueInput | IncidentRecordWhereUniqueInput[]
    disconnect?: IncidentRecordWhereUniqueInput | IncidentRecordWhereUniqueInput[]
    delete?: IncidentRecordWhereUniqueInput | IncidentRecordWhereUniqueInput[]
    connect?: IncidentRecordWhereUniqueInput | IncidentRecordWhereUniqueInput[]
    update?: IncidentRecordUpdateWithWhereUniqueWithoutSourceInput | IncidentRecordUpdateWithWhereUniqueWithoutSourceInput[]
    updateMany?: IncidentRecordUpdateManyWithWhereWithoutSourceInput | IncidentRecordUpdateManyWithWhereWithoutSourceInput[]
    deleteMany?: IncidentRecordScalarWhereInput | IncidentRecordScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSummaryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SummaryStatus | EnumSummaryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SummaryStatus[]
    notIn?: $Enums.SummaryStatus[]
    not?: NestedEnumSummaryStatusFilter<$PrismaModel> | $Enums.SummaryStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumSummaryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SummaryStatus | EnumSummaryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SummaryStatus[]
    notIn?: $Enums.SummaryStatus[]
    not?: NestedEnumSummaryStatusWithAggregatesFilter<$PrismaModel> | $Enums.SummaryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSummaryStatusFilter<$PrismaModel>
    _max?: NestedEnumSummaryStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SummaryStatBlockCreateWithoutWeeklySummaryInput = {
    labelEn: string
    labelAr: string
    value: number
    icon?: string | null
    displayOrder?: number
    groupName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SummaryStatBlockUncheckedCreateWithoutWeeklySummaryInput = {
    id?: number
    labelEn: string
    labelAr: string
    value: number
    icon?: string | null
    displayOrder?: number
    groupName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SummaryStatBlockCreateOrConnectWithoutWeeklySummaryInput = {
    where: SummaryStatBlockWhereUniqueInput
    create: XOR<SummaryStatBlockCreateWithoutWeeklySummaryInput, SummaryStatBlockUncheckedCreateWithoutWeeklySummaryInput>
  }

  export type SummaryStatBlockCreateManyWeeklySummaryInputEnvelope = {
    data: SummaryStatBlockCreateManyWeeklySummaryInput | SummaryStatBlockCreateManyWeeklySummaryInput[]
  }

  export type IncidentRecordCreateWithoutWeeklySummaryInput = {
    titleEn: string
    titleAr: string
    descriptionEn?: string | null
    descriptionAr?: string | null
    recordDate: Date | string
    count?: number
    category: string
    locationNameEn?: string | null
    locationNameAr?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: SourceCreateNestedOneWithoutIncidentsInput
  }

  export type IncidentRecordUncheckedCreateWithoutWeeklySummaryInput = {
    id?: number
    titleEn: string
    titleAr: string
    descriptionEn?: string | null
    descriptionAr?: string | null
    recordDate: Date | string
    count?: number
    category: string
    locationNameEn?: string | null
    locationNameAr?: string | null
    latitude?: number | null
    longitude?: number | null
    sourceId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentRecordCreateOrConnectWithoutWeeklySummaryInput = {
    where: IncidentRecordWhereUniqueInput
    create: XOR<IncidentRecordCreateWithoutWeeklySummaryInput, IncidentRecordUncheckedCreateWithoutWeeklySummaryInput>
  }

  export type IncidentRecordCreateManyWeeklySummaryInputEnvelope = {
    data: IncidentRecordCreateManyWeeklySummaryInput | IncidentRecordCreateManyWeeklySummaryInput[]
  }

  export type SummaryStatBlockUpsertWithWhereUniqueWithoutWeeklySummaryInput = {
    where: SummaryStatBlockWhereUniqueInput
    update: XOR<SummaryStatBlockUpdateWithoutWeeklySummaryInput, SummaryStatBlockUncheckedUpdateWithoutWeeklySummaryInput>
    create: XOR<SummaryStatBlockCreateWithoutWeeklySummaryInput, SummaryStatBlockUncheckedCreateWithoutWeeklySummaryInput>
  }

  export type SummaryStatBlockUpdateWithWhereUniqueWithoutWeeklySummaryInput = {
    where: SummaryStatBlockWhereUniqueInput
    data: XOR<SummaryStatBlockUpdateWithoutWeeklySummaryInput, SummaryStatBlockUncheckedUpdateWithoutWeeklySummaryInput>
  }

  export type SummaryStatBlockUpdateManyWithWhereWithoutWeeklySummaryInput = {
    where: SummaryStatBlockScalarWhereInput
    data: XOR<SummaryStatBlockUpdateManyMutationInput, SummaryStatBlockUncheckedUpdateManyWithoutWeeklySummaryInput>
  }

  export type SummaryStatBlockScalarWhereInput = {
    AND?: SummaryStatBlockScalarWhereInput | SummaryStatBlockScalarWhereInput[]
    OR?: SummaryStatBlockScalarWhereInput[]
    NOT?: SummaryStatBlockScalarWhereInput | SummaryStatBlockScalarWhereInput[]
    id?: IntFilter<"SummaryStatBlock"> | number
    weeklySummaryId?: IntFilter<"SummaryStatBlock"> | number
    labelEn?: StringFilter<"SummaryStatBlock"> | string
    labelAr?: StringFilter<"SummaryStatBlock"> | string
    value?: IntFilter<"SummaryStatBlock"> | number
    icon?: StringNullableFilter<"SummaryStatBlock"> | string | null
    displayOrder?: IntFilter<"SummaryStatBlock"> | number
    groupName?: StringNullableFilter<"SummaryStatBlock"> | string | null
    createdAt?: DateTimeFilter<"SummaryStatBlock"> | Date | string
    updatedAt?: DateTimeFilter<"SummaryStatBlock"> | Date | string
  }

  export type IncidentRecordUpsertWithWhereUniqueWithoutWeeklySummaryInput = {
    where: IncidentRecordWhereUniqueInput
    update: XOR<IncidentRecordUpdateWithoutWeeklySummaryInput, IncidentRecordUncheckedUpdateWithoutWeeklySummaryInput>
    create: XOR<IncidentRecordCreateWithoutWeeklySummaryInput, IncidentRecordUncheckedCreateWithoutWeeklySummaryInput>
  }

  export type IncidentRecordUpdateWithWhereUniqueWithoutWeeklySummaryInput = {
    where: IncidentRecordWhereUniqueInput
    data: XOR<IncidentRecordUpdateWithoutWeeklySummaryInput, IncidentRecordUncheckedUpdateWithoutWeeklySummaryInput>
  }

  export type IncidentRecordUpdateManyWithWhereWithoutWeeklySummaryInput = {
    where: IncidentRecordScalarWhereInput
    data: XOR<IncidentRecordUpdateManyMutationInput, IncidentRecordUncheckedUpdateManyWithoutWeeklySummaryInput>
  }

  export type IncidentRecordScalarWhereInput = {
    AND?: IncidentRecordScalarWhereInput | IncidentRecordScalarWhereInput[]
    OR?: IncidentRecordScalarWhereInput[]
    NOT?: IncidentRecordScalarWhereInput | IncidentRecordScalarWhereInput[]
    id?: IntFilter<"IncidentRecord"> | number
    weeklySummaryId?: IntFilter<"IncidentRecord"> | number
    titleEn?: StringFilter<"IncidentRecord"> | string
    titleAr?: StringFilter<"IncidentRecord"> | string
    descriptionEn?: StringNullableFilter<"IncidentRecord"> | string | null
    descriptionAr?: StringNullableFilter<"IncidentRecord"> | string | null
    recordDate?: DateTimeFilter<"IncidentRecord"> | Date | string
    count?: IntFilter<"IncidentRecord"> | number
    category?: StringFilter<"IncidentRecord"> | string
    locationNameEn?: StringNullableFilter<"IncidentRecord"> | string | null
    locationNameAr?: StringNullableFilter<"IncidentRecord"> | string | null
    latitude?: FloatNullableFilter<"IncidentRecord"> | number | null
    longitude?: FloatNullableFilter<"IncidentRecord"> | number | null
    sourceId?: IntNullableFilter<"IncidentRecord"> | number | null
    createdAt?: DateTimeFilter<"IncidentRecord"> | Date | string
    updatedAt?: DateTimeFilter<"IncidentRecord"> | Date | string
  }

  export type WeeklySummaryCreateWithoutStatBlocksInput = {
    titleEn: string
    titleAr: string
    subtitleEn?: string | null
    subtitleAr?: string | null
    weekStart: Date | string
    weekEnd: Date | string
    totalIncidents: number
    dailyAverage: number
    maxRangeKm?: number | null
    notesEn?: string | null
    notesAr?: string | null
    coverImageUrl?: string | null
    status?: $Enums.SummaryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    incidents?: IncidentRecordCreateNestedManyWithoutWeeklySummaryInput
  }

  export type WeeklySummaryUncheckedCreateWithoutStatBlocksInput = {
    id?: number
    titleEn: string
    titleAr: string
    subtitleEn?: string | null
    subtitleAr?: string | null
    weekStart: Date | string
    weekEnd: Date | string
    totalIncidents: number
    dailyAverage: number
    maxRangeKm?: number | null
    notesEn?: string | null
    notesAr?: string | null
    coverImageUrl?: string | null
    status?: $Enums.SummaryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    incidents?: IncidentRecordUncheckedCreateNestedManyWithoutWeeklySummaryInput
  }

  export type WeeklySummaryCreateOrConnectWithoutStatBlocksInput = {
    where: WeeklySummaryWhereUniqueInput
    create: XOR<WeeklySummaryCreateWithoutStatBlocksInput, WeeklySummaryUncheckedCreateWithoutStatBlocksInput>
  }

  export type WeeklySummaryUpsertWithoutStatBlocksInput = {
    update: XOR<WeeklySummaryUpdateWithoutStatBlocksInput, WeeklySummaryUncheckedUpdateWithoutStatBlocksInput>
    create: XOR<WeeklySummaryCreateWithoutStatBlocksInput, WeeklySummaryUncheckedCreateWithoutStatBlocksInput>
    where?: WeeklySummaryWhereInput
  }

  export type WeeklySummaryUpdateToOneWithWhereWithoutStatBlocksInput = {
    where?: WeeklySummaryWhereInput
    data: XOR<WeeklySummaryUpdateWithoutStatBlocksInput, WeeklySummaryUncheckedUpdateWithoutStatBlocksInput>
  }

  export type WeeklySummaryUpdateWithoutStatBlocksInput = {
    titleEn?: StringFieldUpdateOperationsInput | string
    titleAr?: StringFieldUpdateOperationsInput | string
    subtitleEn?: NullableStringFieldUpdateOperationsInput | string | null
    subtitleAr?: NullableStringFieldUpdateOperationsInput | string | null
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalIncidents?: IntFieldUpdateOperationsInput | number
    dailyAverage?: FloatFieldUpdateOperationsInput | number
    maxRangeKm?: NullableFloatFieldUpdateOperationsInput | number | null
    notesEn?: NullableStringFieldUpdateOperationsInput | string | null
    notesAr?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSummaryStatusFieldUpdateOperationsInput | $Enums.SummaryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentRecordUpdateManyWithoutWeeklySummaryNestedInput
  }

  export type WeeklySummaryUncheckedUpdateWithoutStatBlocksInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleEn?: StringFieldUpdateOperationsInput | string
    titleAr?: StringFieldUpdateOperationsInput | string
    subtitleEn?: NullableStringFieldUpdateOperationsInput | string | null
    subtitleAr?: NullableStringFieldUpdateOperationsInput | string | null
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalIncidents?: IntFieldUpdateOperationsInput | number
    dailyAverage?: FloatFieldUpdateOperationsInput | number
    maxRangeKm?: NullableFloatFieldUpdateOperationsInput | number | null
    notesEn?: NullableStringFieldUpdateOperationsInput | string | null
    notesAr?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSummaryStatusFieldUpdateOperationsInput | $Enums.SummaryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentRecordUncheckedUpdateManyWithoutWeeklySummaryNestedInput
  }

  export type WeeklySummaryCreateWithoutIncidentsInput = {
    titleEn: string
    titleAr: string
    subtitleEn?: string | null
    subtitleAr?: string | null
    weekStart: Date | string
    weekEnd: Date | string
    totalIncidents: number
    dailyAverage: number
    maxRangeKm?: number | null
    notesEn?: string | null
    notesAr?: string | null
    coverImageUrl?: string | null
    status?: $Enums.SummaryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    statBlocks?: SummaryStatBlockCreateNestedManyWithoutWeeklySummaryInput
  }

  export type WeeklySummaryUncheckedCreateWithoutIncidentsInput = {
    id?: number
    titleEn: string
    titleAr: string
    subtitleEn?: string | null
    subtitleAr?: string | null
    weekStart: Date | string
    weekEnd: Date | string
    totalIncidents: number
    dailyAverage: number
    maxRangeKm?: number | null
    notesEn?: string | null
    notesAr?: string | null
    coverImageUrl?: string | null
    status?: $Enums.SummaryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    statBlocks?: SummaryStatBlockUncheckedCreateNestedManyWithoutWeeklySummaryInput
  }

  export type WeeklySummaryCreateOrConnectWithoutIncidentsInput = {
    where: WeeklySummaryWhereUniqueInput
    create: XOR<WeeklySummaryCreateWithoutIncidentsInput, WeeklySummaryUncheckedCreateWithoutIncidentsInput>
  }

  export type SourceCreateWithoutIncidentsInput = {
    name: string
    url?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceUncheckedCreateWithoutIncidentsInput = {
    id?: number
    name: string
    url?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceCreateOrConnectWithoutIncidentsInput = {
    where: SourceWhereUniqueInput
    create: XOR<SourceCreateWithoutIncidentsInput, SourceUncheckedCreateWithoutIncidentsInput>
  }

  export type WeeklySummaryUpsertWithoutIncidentsInput = {
    update: XOR<WeeklySummaryUpdateWithoutIncidentsInput, WeeklySummaryUncheckedUpdateWithoutIncidentsInput>
    create: XOR<WeeklySummaryCreateWithoutIncidentsInput, WeeklySummaryUncheckedCreateWithoutIncidentsInput>
    where?: WeeklySummaryWhereInput
  }

  export type WeeklySummaryUpdateToOneWithWhereWithoutIncidentsInput = {
    where?: WeeklySummaryWhereInput
    data: XOR<WeeklySummaryUpdateWithoutIncidentsInput, WeeklySummaryUncheckedUpdateWithoutIncidentsInput>
  }

  export type WeeklySummaryUpdateWithoutIncidentsInput = {
    titleEn?: StringFieldUpdateOperationsInput | string
    titleAr?: StringFieldUpdateOperationsInput | string
    subtitleEn?: NullableStringFieldUpdateOperationsInput | string | null
    subtitleAr?: NullableStringFieldUpdateOperationsInput | string | null
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalIncidents?: IntFieldUpdateOperationsInput | number
    dailyAverage?: FloatFieldUpdateOperationsInput | number
    maxRangeKm?: NullableFloatFieldUpdateOperationsInput | number | null
    notesEn?: NullableStringFieldUpdateOperationsInput | string | null
    notesAr?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSummaryStatusFieldUpdateOperationsInput | $Enums.SummaryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statBlocks?: SummaryStatBlockUpdateManyWithoutWeeklySummaryNestedInput
  }

  export type WeeklySummaryUncheckedUpdateWithoutIncidentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleEn?: StringFieldUpdateOperationsInput | string
    titleAr?: StringFieldUpdateOperationsInput | string
    subtitleEn?: NullableStringFieldUpdateOperationsInput | string | null
    subtitleAr?: NullableStringFieldUpdateOperationsInput | string | null
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalIncidents?: IntFieldUpdateOperationsInput | number
    dailyAverage?: FloatFieldUpdateOperationsInput | number
    maxRangeKm?: NullableFloatFieldUpdateOperationsInput | number | null
    notesEn?: NullableStringFieldUpdateOperationsInput | string | null
    notesAr?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSummaryStatusFieldUpdateOperationsInput | $Enums.SummaryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statBlocks?: SummaryStatBlockUncheckedUpdateManyWithoutWeeklySummaryNestedInput
  }

  export type SourceUpsertWithoutIncidentsInput = {
    update: XOR<SourceUpdateWithoutIncidentsInput, SourceUncheckedUpdateWithoutIncidentsInput>
    create: XOR<SourceCreateWithoutIncidentsInput, SourceUncheckedCreateWithoutIncidentsInput>
    where?: SourceWhereInput
  }

  export type SourceUpdateToOneWithWhereWithoutIncidentsInput = {
    where?: SourceWhereInput
    data: XOR<SourceUpdateWithoutIncidentsInput, SourceUncheckedUpdateWithoutIncidentsInput>
  }

  export type SourceUpdateWithoutIncidentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceUncheckedUpdateWithoutIncidentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentRecordCreateWithoutSourceInput = {
    titleEn: string
    titleAr: string
    descriptionEn?: string | null
    descriptionAr?: string | null
    recordDate: Date | string
    count?: number
    category: string
    locationNameEn?: string | null
    locationNameAr?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    weeklySummary: WeeklySummaryCreateNestedOneWithoutIncidentsInput
  }

  export type IncidentRecordUncheckedCreateWithoutSourceInput = {
    id?: number
    weeklySummaryId: number
    titleEn: string
    titleAr: string
    descriptionEn?: string | null
    descriptionAr?: string | null
    recordDate: Date | string
    count?: number
    category: string
    locationNameEn?: string | null
    locationNameAr?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentRecordCreateOrConnectWithoutSourceInput = {
    where: IncidentRecordWhereUniqueInput
    create: XOR<IncidentRecordCreateWithoutSourceInput, IncidentRecordUncheckedCreateWithoutSourceInput>
  }

  export type IncidentRecordCreateManySourceInputEnvelope = {
    data: IncidentRecordCreateManySourceInput | IncidentRecordCreateManySourceInput[]
  }

  export type IncidentRecordUpsertWithWhereUniqueWithoutSourceInput = {
    where: IncidentRecordWhereUniqueInput
    update: XOR<IncidentRecordUpdateWithoutSourceInput, IncidentRecordUncheckedUpdateWithoutSourceInput>
    create: XOR<IncidentRecordCreateWithoutSourceInput, IncidentRecordUncheckedCreateWithoutSourceInput>
  }

  export type IncidentRecordUpdateWithWhereUniqueWithoutSourceInput = {
    where: IncidentRecordWhereUniqueInput
    data: XOR<IncidentRecordUpdateWithoutSourceInput, IncidentRecordUncheckedUpdateWithoutSourceInput>
  }

  export type IncidentRecordUpdateManyWithWhereWithoutSourceInput = {
    where: IncidentRecordScalarWhereInput
    data: XOR<IncidentRecordUpdateManyMutationInput, IncidentRecordUncheckedUpdateManyWithoutSourceInput>
  }

  export type SummaryStatBlockCreateManyWeeklySummaryInput = {
    id?: number
    labelEn: string
    labelAr: string
    value: number
    icon?: string | null
    displayOrder?: number
    groupName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentRecordCreateManyWeeklySummaryInput = {
    id?: number
    titleEn: string
    titleAr: string
    descriptionEn?: string | null
    descriptionAr?: string | null
    recordDate: Date | string
    count?: number
    category: string
    locationNameEn?: string | null
    locationNameAr?: string | null
    latitude?: number | null
    longitude?: number | null
    sourceId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SummaryStatBlockUpdateWithoutWeeklySummaryInput = {
    labelEn?: StringFieldUpdateOperationsInput | string
    labelAr?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryStatBlockUncheckedUpdateWithoutWeeklySummaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    labelEn?: StringFieldUpdateOperationsInput | string
    labelAr?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryStatBlockUncheckedUpdateManyWithoutWeeklySummaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    labelEn?: StringFieldUpdateOperationsInput | string
    labelAr?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentRecordUpdateWithoutWeeklySummaryInput = {
    titleEn?: StringFieldUpdateOperationsInput | string
    titleAr?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionAr?: NullableStringFieldUpdateOperationsInput | string | null
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    locationNameEn?: NullableStringFieldUpdateOperationsInput | string | null
    locationNameAr?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: SourceUpdateOneWithoutIncidentsNestedInput
  }

  export type IncidentRecordUncheckedUpdateWithoutWeeklySummaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleEn?: StringFieldUpdateOperationsInput | string
    titleAr?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionAr?: NullableStringFieldUpdateOperationsInput | string | null
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    locationNameEn?: NullableStringFieldUpdateOperationsInput | string | null
    locationNameAr?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    sourceId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentRecordUncheckedUpdateManyWithoutWeeklySummaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleEn?: StringFieldUpdateOperationsInput | string
    titleAr?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionAr?: NullableStringFieldUpdateOperationsInput | string | null
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    locationNameEn?: NullableStringFieldUpdateOperationsInput | string | null
    locationNameAr?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    sourceId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentRecordCreateManySourceInput = {
    id?: number
    weeklySummaryId: number
    titleEn: string
    titleAr: string
    descriptionEn?: string | null
    descriptionAr?: string | null
    recordDate: Date | string
    count?: number
    category: string
    locationNameEn?: string | null
    locationNameAr?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentRecordUpdateWithoutSourceInput = {
    titleEn?: StringFieldUpdateOperationsInput | string
    titleAr?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionAr?: NullableStringFieldUpdateOperationsInput | string | null
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    locationNameEn?: NullableStringFieldUpdateOperationsInput | string | null
    locationNameAr?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weeklySummary?: WeeklySummaryUpdateOneRequiredWithoutIncidentsNestedInput
  }

  export type IncidentRecordUncheckedUpdateWithoutSourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    weeklySummaryId?: IntFieldUpdateOperationsInput | number
    titleEn?: StringFieldUpdateOperationsInput | string
    titleAr?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionAr?: NullableStringFieldUpdateOperationsInput | string | null
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    locationNameEn?: NullableStringFieldUpdateOperationsInput | string | null
    locationNameAr?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentRecordUncheckedUpdateManyWithoutSourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    weeklySummaryId?: IntFieldUpdateOperationsInput | number
    titleEn?: StringFieldUpdateOperationsInput | string
    titleAr?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionAr?: NullableStringFieldUpdateOperationsInput | string | null
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    locationNameEn?: NullableStringFieldUpdateOperationsInput | string | null
    locationNameAr?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}