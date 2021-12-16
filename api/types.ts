/** This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. */
export interface Pagination {
  /** Amount of items in the current page. */
  count: number;
  /** Timestamp that must be used to request the next page. */
  next: number | null;
  /** Timestamp that must be used to request the previous page. */
  prev: number | null;
}

export type InResponse<key extends string, T> = {
  [K in key]: T;
} & {
  pagination?: Pagination;
};

export interface TeamLimited {
  /** Property indicating that this Team data contains only limited information, due to the authentication token missing privileges to read the full Team data. Re-login with the Team's configured SAML Single Sign-On provider in order to upgrade the authentication token with the necessary privileges. */
  limited: boolean;
  /** When "Single Sign-On (SAML)" is configured, this object contains information that allows the client-side to identify whether or not this Team has SAML enforced. */
  saml?: {
    /** Information for the SAML Single Sign-On configuration. */
    connection?: {
      /** The Identity Provider "type", for example Okta. */
      type: string;
      /** Current status of the connection. */
      status: string;
      /** Current state of the connection. */
      state: string;
      /** Timestamp (in milliseconds) of when the configuration was connected. */
      connectedAt: number;
    };
    /** When `true`, interactions with the Team **must** be done with an authentication token that has been authenticated with the Team's SAML Single Sign-On provider. */
    enforced: boolean;
  };
  /** The Team's unique identifier. */
  id: string;
  /** The Team's slug, which is unique across the Vercel platform. */
  slug: string;
  /** Name associated with the Team account, or `null` if none has been provided. */
  name: string | null;
  /** The ID of the file used as avatar for this Team. */
  avatar: string | null;
  membership:
    | {
        confirmed: boolean;
        accessRequestedAt?: number;
        role: "OWNER" | "MEMBER";
        teamId?: string;
        uid: string;
        createdAt: number;
        created: number;
        joinedFrom?: {
          origin:
            | "mail"
            | "link"
            | "import"
            | "teams"
            | "github"
            | "gitlab"
            | "bitbucket"
            | "saml"
            | "dsync";
          commitId?: string;
          repoId?: string;
          repoPath?: string;
          gitUserId?: string | number;
          gitUserLogin?: string;
          ssoUserId?: string;
          ssoConnectedAt?: number;
          idpUserId?: string;
          dsyncUserId?: string;
          dsyncConnectedAt?: number;
        };
      }
    | {
        confirmed: boolean;
        accessRequestedAt: number;
        role: "OWNER" | "MEMBER";
        teamId?: string;
        uid: string;
        createdAt: number;
        created: number;
        joinedFrom?: {
          origin:
            | "mail"
            | "link"
            | "import"
            | "teams"
            | "github"
            | "gitlab"
            | "bitbucket"
            | "saml"
            | "dsync";
          commitId?: string;
          repoId?: string;
          repoPath?: string;
          gitUserId?: string | number;
          gitUserLogin?: string;
          ssoUserId?: string;
          ssoConnectedAt?: number;
          idpUserId?: string;
          dsyncUserId?: string;
          dsyncConnectedAt?: number;
        };
      };
  /** Will remain undocumented. Remove in v3 API. */
  created: string;
  /** UNIX timestamp (in milliseconds) when the Team was created. */
  createdAt: number;
}

export interface Deployment {
  /** The unique identifier of the deployment. */
  uid: string;
  /** The name of the deployment. */
  name: string;
  /** The URL of the deployment. */
  url: string;
  /** Timestamp of when the deployment got created. */
  created: number;
  /** In which state is the deployment. */
  state?:
    | "BUILDING"
    | "ERROR"
    | "INITIALIZING"
    | "QUEUED"
    | "READY"
    | "CANCELED";
  /** The type of the deployment. */
  type: "LAMBDAS";
  /** Metadata information of the user who created the deployment. */
  creator: {
    /** The unique identifier of the user. */
    uid: string;
    /** The email address of the user. */
    email?: string;
    /** The username of the user. */
    username?: string;
    /** The GitHub login of the user. */
    githubLogin?: string;
    /** The GitLab login of the user. */
    gitlabLogin?: string;
  };
  /** Metadata information from the Git provider. */
  meta?: { [key: string]: string };
  /** On which environment has the deployment been deployed to. */
  target?: ("production" | "staging") | null;
  /** An error object in case aliasing of the deployment failed. */
  aliasError?: {
    code: string;
    message: string;
  } | null;
  aliasAssigned?: (number | boolean) | null;
  /** Timestamp of when the deployment got created. */
  createdAt?: number;
  /** Timestamp of when the deployment started building at. */
  buildingAt?: number;
  /** Timestamp of when the deployment got ready. */
  ready?: number;
  /** State of all registered checks */
  checksState?: "registered" | "running" | "completed";
  /** Conclusion for checks */
  checksConclusion?: "succeeded" | "failed" | "skipped" | "canceled";
}
