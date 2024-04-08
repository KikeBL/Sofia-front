declare module 'astro-openapi:types' {
  import type {
    OpenAPIClient,
    Parameters,
    UnknownParamsObject,
    OperationResponse,
    AxiosRequestConfig,
  } from 'openapi-client-axios';
  declare namespace Components {
    namespace Schemas {
      /**
       * Body_add_knowledge_csv_direct_admin_knowledge_direct_addKnowledgeCsvDirect_post
       */
      export interface BodyAddKnowledgeCsvDirectAdminKnowledgeDirectAddKnowledgeCsvDirectPost {
        /**
         * Index Name
         */
        index_name: string;
        /**
         * Column To Vectorize
         */
        column_to_vectorize: string;
        /**
         * Delimiter
         */
        delimiter?: string;
        /**
         * Ambit
         */
        ambit: string;
        /**
         * Role
         */
        role: string;
        /**
         * Security Group
         */
        security_group: string;
        /**
         * File
         */
        file: string; // binary
      }
      /**
       * Body_add_knowledge_pdf_direct_admin_knowledge_direct_addKnowledgePdfDirect_post
       */
      export interface BodyAddKnowledgePdfDirectAdminKnowledgeDirectAddKnowledgePdfDirectPost {
        /**
         * Index Name
         */
        index_name: string;
        /**
         * Ambit
         */
        ambit: string;
        /**
         * Role
         */
        role: string;
        /**
         * Security Group
         */
        security_group: string;
        /**
         * File
         */
        file: string; // binary
      }
      /**
       * Body_add_knowledge_txt_direct_admin_knowledge_direct_addKnowledgeTxtDirect_post
       */
      export interface BodyAddKnowledgeTxtDirectAdminKnowledgeDirectAddKnowledgeTxtDirectPost {
        /**
         * Index Name
         */
        index_name: string;
        /**
         * Ambit
         */
        ambit: string;
        /**
         * Role
         */
        role: string;
        /**
         * Security Group
         */
        security_group: string;
        /**
         * File
         */
        file: string; // binary
      }
      /**
       * Body_audio_chat_chat_audio_chat_post
       */
      export interface BodyAudioChatChatAudioChatPost {
        /**
         * Myfile
         */
        myfile: string; // binary
      }
      /**
       * Body_store_uploaded_file_user_files_upload_file_post
       */
      export interface BodyStoreUploadedFileUserFilesUploadFilePost {
        /**
         * Myfile
         */
        myfile: string; // binary
      }
      /**
       * ChatEvent
       */
      export interface ChatEvent {
        /**
         * User
         */
        user: any;
        /**
         * Space
         */
        space: any;
        /**
         * Common
         */
        common: any;
      }
      /**
       * DataSourceGitConnectionModel
       */
      export interface DataSourceGitConnectionModel {
        /**
         * Datasource Name
         */
        datasource_name: string;
        /**
         * Type
         */
        type?: string;
        /**
         * Clone Url
         */
        clone_url?: /* Clone Url */ string | null;
        /**
         * Repo Branch
         */
        repo_branch: string;
        /**
         * Repo Name
         */
        repo_name?: /* Repo Name */ string | null;
        /**
         * User Name
         */
        user_name?: /* User Name */ string | null;
        /**
         * User Password
         */
        user_password?: /* User Password */ string | null;
      }
      /**
       * DataSourceSQLConnectionModel
       */
      export interface DataSourceSQLConnectionModel {
        /**
         * Datasource Name
         */
        datasource_name: string;
        /**
         * Type
         */
        type?: /* Type */ string | null;
        /**
         * Database Dialect
         */
        database_dialect: string;
        /**
         * Database Path
         */
        database_path: string;
        /**
         * Database Driver
         */
        database_driver: /* Database Driver */ string | null;
        /**
         * Username
         */
        username: /* Username */ string | null;
        /**
         * Password
         */
        password: /* Password */ string | null;
        /**
         * Host
         */
        host: /* Host */ string | null;
        /**
         * Port
         */
        port: /* Port */ number | null;
      }
      /**
       * HTTPValidationError
       */
      export interface HTTPValidationError {
        /**
         * Detail
         */
        detail?: /* ValidationError */ ValidationError[];
      }
      /**
       * KnowledgeSqlModel
       */
      export interface KnowledgeSqlModel {
        /**
         * Name
         */
        name: string;
        /**
         * Description
         */
        description: string;
        /**
         * Cron
         */
        cron: string;
        /**
         * Datasource Name
         */
        datasource_name: string;
        /**
         * Index Name
         */
        index_name: string;
        /**
         * Ambit
         */
        ambit: string;
        /**
         * Role
         */
        role: string;
        /**
         * Security Group
         */
        security_group: string;
        /**
         * Transformers
         */
        transformers: /* Transformers */ {
          [key: string]: any;
        } | null;
        /**
         * Cleaners
         */
        cleaners: /* Cleaners */ {
          [key: string]: any;
        } | null;
        /**
         * Type
         */
        type?: /* Type */ string | null;
        /**
         * Sql Query
         */
        sql_query: string;
        /**
         * Incremental Sql Query
         */
        incremental_sql_query: /* Incremental Sql Query */ string | null;
      }
      /**
       * KnowledgeStructuredModel
       */
      export interface KnowledgeStructuredModel {
        /**
         * Name
         */
        name: string;
        /**
         * Description
         */
        description: string;
        /**
         * Cron
         */
        cron: string;
        /**
         * Datasource Name
         */
        datasource_name: string;
        /**
         * Index Name
         */
        index_name: string;
        /**
         * Ambit
         */
        ambit: string;
        /**
         * Role
         */
        role: string;
        /**
         * Security Group
         */
        security_group: string;
        /**
         * Transformers
         */
        transformers: /* Transformers */ {
          [key: string]: any;
        } | null;
        /**
         * Cleaners
         */
        cleaners: /* Cleaners */ {
          [key: string]: any;
        } | null;
        /**
         * Type
         */
        type?: /* Type */ string | null;
        /**
         * File Path
         */
        file_path: string;
        /**
         * Content Col
         */
        content_col: string;
      }
      /**
       * KnowledgeToolModel
       */
      export interface KnowledgeToolModel {
        /**
         * Name
         */
        name: string;
        /**
         * Description
         */
        description: string;
        /**
         * Index Name
         */
        index_name: string;
        /**
         * Output Col
         */
        output_col: /* Output Col */ string[] | null;
        /**
         * Threshold
         */
        threshold: /* Threshold */ number | null;
        /**
         * Similarity Threshold
         */
        similarity_threshold?: /* Similarity Threshold */ number | null;
        /**
         * Extra Args
         */
        extra_args: /* Extra Args */ {
          [name: string]: string;
        } | null;
      }
      /**
       * KnowledgeUnstructuredModel
       */
      export interface KnowledgeUnstructuredModel {
        /**
         * Name
         */
        name: string;
        /**
         * Description
         */
        description: string;
        /**
         * Cron
         */
        cron: string;
        /**
         * Datasource Name
         */
        datasource_name: string;
        /**
         * Index Name
         */
        index_name: string;
        /**
         * Ambit
         */
        ambit: string;
        /**
         * Role
         */
        role: string;
        /**
         * Security Group
         */
        security_group: string;
        /**
         * Transformers
         */
        transformers: /* Transformers */ {
          [key: string]: any;
        } | null;
        /**
         * Cleaners
         */
        cleaners: /* Cleaners */ {
          [key: string]: any;
        } | null;
        /**
         * Type
         */
        type?: /* Type */ string | null;
        /**
         * File Path
         */
        file_path: string;
      }
      /**
       * Message
       */
      export interface Message {
        /**
         * Thread
         */
        thread: string;
        /**
         * Timestamp
         */
        timestamp: string;
        /**
         * Role
         */
        role: string;
        /**
         * Profile
         */
        profile: string;
        /**
         * Content
         */
        content: string;
      }
      /**
       * Prompt
       */
      export interface Prompt {
        /**
         * Text
         */
        text: string;
        /**
         * Session Id
         */
        session_id: string;
      }
      /**
       * RouterPath
       */
      export interface RouterPath {
        /**
         * Indicator
         */
        indicator: string;
        /**
         * Description
         */
        description: string;
      }
      /**
       * Thread
       */
      export interface Thread {
        /**
         * Thread
         */
        thread: string;
        /**
         * Profile
         */
        profile: string;
        /**
         * Label
         */
        label: string;
      }
      /**
       * ValidationError
       */
      export interface ValidationError {
        /**
         * Location
         */
        loc: (string | number)[];
        /**
         * Message
         */
        msg: string;
        /**
         * Error Type
         */
        type: string;
      }
      /**
       * VectorFieldModel
       */
      export interface VectorFieldModel {
        /**
         * Name
         */
        name: string;
        /**
         * Field Type
         */
        field_type: string;
        /**
         * Searchable
         */
        searchable: boolean;
      }
      /**
       * VectorIndexModel
       */
      export interface VectorIndexModel {
        /**
         * Index Name
         */
        index_name: string;
        /**
         * Vector Algorithm
         */
        vector_algorithm: string;
        /**
         * Fields Schema
         */
        fields_schema: /* Fields Schema */ /* VectorFieldModel */
          | VectorFieldModel[]
          | null;
      }
    }
  }
  declare namespace Paths {
    namespace AddDbDatasourceAdminDatasourceDatabaseCreatePost {
      /**
       * Payload
       */
      export type RequestBody =
        /* DataSourceSQLConnectionModel */ Components.Schemas.DataSourceSQLConnectionModel[];
      namespace Responses {
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace AddDbDatasourceAdminDatasourceDatabaseUpdatePost {
      export type RequestBody =
        /* DataSourceSQLConnectionModel */ Components.Schemas.DataSourceSQLConnectionModel;
      namespace Responses {
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace AddGitDatasourceAdminDatasourceGitCreatePost {
      /**
       * Payload
       */
      export type RequestBody =
        /* DataSourceGitConnectionModel */ Components.Schemas.DataSourceGitConnectionModel[];
      namespace Responses {
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace AddKnowledgeAdminKnowledgeSqlCreatePost {
      /**
       * Payload
       */
      export type RequestBody =
        /* KnowledgeSqlModel */ Components.Schemas.KnowledgeSqlModel[];
      namespace Responses {
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace AddKnowledgeCsvDirectAdminKnowledgeDirectAddKnowledgeCsvDirectPost {
      export type RequestBody =
        /* Body_add_knowledge_csv_direct_admin_knowledge_direct_addKnowledgeCsvDirect_post */ Components.Schemas.BodyAddKnowledgeCsvDirectAdminKnowledgeDirectAddKnowledgeCsvDirectPost;
      namespace Responses {
        export type $201 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace AddKnowledgeFileAdminKnowledgeFileCreatePost {
      /**
       * Payload
       */
      export type RequestBody =
        /* KnowledgeStructuredModel */ Components.Schemas.KnowledgeStructuredModel[];
      namespace Responses {
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace AddKnowledgePdfDirectAdminKnowledgeDirectAddKnowledgePdfDirectPost {
      export type RequestBody =
        /* Body_add_knowledge_pdf_direct_admin_knowledge_direct_addKnowledgePdfDirect_post */ Components.Schemas.BodyAddKnowledgePdfDirectAdminKnowledgeDirectAddKnowledgePdfDirectPost;
      namespace Responses {
        export type $201 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace AddKnowledgeToolAdminKnowledgeToolCreatePost {
      /**
       * Payload
       */
      export type RequestBody =
        /* KnowledgeToolModel */ Components.Schemas.KnowledgeToolModel[];
      namespace Responses {
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace AddKnowledgeTxtDirectAdminKnowledgeDirectAddKnowledgeTxtDirectPost {
      export type RequestBody =
        /* Body_add_knowledge_txt_direct_admin_knowledge_direct_addKnowledgeTxtDirect_post */ Components.Schemas.BodyAddKnowledgeTxtDirectAdminKnowledgeDirectAddKnowledgeTxtDirectPost;
      namespace Responses {
        export type $201 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace AddVectorIndexAdminVectorIndexCreatePost {
      /**
       * Payload
       */
      export type RequestBody =
        /* VectorIndexModel */ Components.Schemas.VectorIndexModel[];
      namespace Responses {
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace AudioChatChatAudioChatPost {
      namespace Parameters {
        /**
         * Session Id
         */
        export type SessionId = string;
        /**
         * Text
         */
        export type Text = string;
      }
      export interface QueryParameters {
        text: /* Text */ Parameters.Text;
        session_id: /* Session Id */ Parameters.SessionId;
      }
      export type RequestBody =
        /* Body_audio_chat_chat_audio_chat_post */ Components.Schemas.BodyAudioChatChatAudioChatPost;
      namespace Responses {
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace ClockInChatbotGoogleChatClockInPost {
      export type RequestBody = /* ChatEvent */ Components.Schemas.ChatEvent;
      namespace Responses {
        /**
         * Response Clockin Chatbot Google Chat Clock In Post
         */
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace ClockOutChatbotGoogleChatClockOutPost {
      export type RequestBody = /* ChatEvent */ Components.Schemas.ChatEvent;
      namespace Responses {
        /**
         * Response Clockout Chatbot Google Chat Clock Out Post
         */
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace CreatePathAdminRouterCreatePost {
      /**
       * Payload
       */
      export type RequestBody =
        /* RouterPath */ Components.Schemas.RouterPath[];
      namespace Responses {
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace DeleteDatasourceAdminDatasourceDatabaseDeleteDatasourceNameDelete {
      namespace Parameters {
        /**
         * Datasource Name
         */
        export type DatasourceName = string;
      }
      export interface PathParameters {
        datasource_name: /* Datasource Name */ Parameters.DatasourceName;
      }
      namespace Responses {
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace DeleteKnowledgeAdminKnowledgeSqlDeleteKnowledgeNameDelete {
      namespace Parameters {
        /**
         * Knowledge Name
         */
        export type KnowledgeName = string;
      }
      export interface PathParameters {
        knowledge_name: /* Knowledge Name */ Parameters.KnowledgeName;
      }
      namespace Responses {
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace DeletePathAdminRouterDeleteIndicatorDelete {
      namespace Parameters {
        /**
         * Indicator
         */
        export type Indicator = string;
      }
      export interface PathParameters {
        indicator: /* Indicator */ Parameters.Indicator;
      }
      namespace Responses {
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace DeleteToolAdminKnowledgeToolDeleteToolNameDelete {
      namespace Parameters {
        /**
         * Tool Name
         */
        export type ToolName = any;
      }
      export interface PathParameters {
        tool_name: /* Tool Name */ Parameters.ToolName;
      }
      namespace Responses {
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace ExportDatasourcesAdminDatasourceExportGet {
      namespace Responses {
        export type $200 = any;
      }
    }
    namespace ExportKnowledgeAdminKnowledgeExportGet {
      namespace Responses {
        export type $200 = any;
      }
    }
    namespace GetDbDatasourceAdminDatasourceDatabaseReadDatasourceNameGet {
      namespace Parameters {
        /**
         * Datasource Name
         */
        export type DatasourceName = string;
      }
      export interface PathParameters {
        datasource_name: /* Datasource Name */ Parameters.DatasourceName;
      }
      namespace Responses {
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace GetDbDatasourceAdminDatasourceDatabaseReadGet {
      namespace Responses {
        export type $200 = any;
      }
    }
    namespace GetGitDatasourcesAdminDatasourceGitReadGet {
      namespace Responses {
        export type $200 = any;
      }
    }
    namespace GetKnowledgeAdminKnowledgeSqlReadGet {
      namespace Responses {
        export type $200 = any;
      }
    }
    namespace GetKnowledgeAdminKnowledgeSqlReadKnowledgeNameGet {
      namespace Parameters {
        /**
         * Knowledge Name
         */
        export type KnowledgeName = string;
      }
      export interface PathParameters {
        knowledge_name: /* Knowledge Name */ Parameters.KnowledgeName;
      }
      namespace Responses {
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace GetPathsAdminRouterExportGet {
      namespace Responses {
        export type $200 = any;
      }
    }
    namespace GetPathsAdminRouterReadIndicatorGet {
      namespace Parameters {
        /**
         * Indicator
         */
        export type Indicator = string;
      }
      export interface PathParameters {
        indicator: /* Indicator */ Parameters.Indicator;
      }
      namespace Responses {
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace GetSettingProfileSettingsGetSettingsPost {
      export type RequestBody = /* ChatEvent */ Components.Schemas.ChatEvent;
      namespace Responses {
        /**
         * Response Getsetting Profile Settings Get Settings Post
         */
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace GetToolAdminKnowledgeToolReadToolNameGet {
      namespace Parameters {
        /**
         * Tool Name
         */
        export type ToolName = any;
      }
      export interface PathParameters {
        tool_name: /* Tool Name */ Parameters.ToolName;
      }
      namespace Responses {
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace GetToolsAdminKnowledgeToolReadGet {
      namespace Responses {
        export type $200 = any;
      }
    }
    namespace GetVectorIndexAdminVectorIndexReadVectorIndexNameGet {
      namespace Parameters {
        /**
         * Vector Index Name
         */
        export type VectorIndexName = any;
      }
      export interface PathParameters {
        vector_index_name: /* Vector Index Name */ Parameters.VectorIndexName;
      }
      namespace Responses {
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace GetVectorIndexesAdminVectorIndexReadGet {
      namespace Responses {
        export type $200 = any;
      }
    }
    namespace GoChatTextChatPost {
      export type RequestBody = /* Prompt */ Components.Schemas.Prompt;
      namespace Responses {
        /**
         * Response Go Chat Text Chat Post
         */
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace ImportDatasourcesAdminDatasourceImportPost {
      /**
       * Payload
       */
      export type RequestBody = /* DataSourceGitConnectionModel */ (
        | Components.Schemas.DataSourceGitConnectionModel
        | /* DataSourceSQLConnectionModel */ Components.Schemas.DataSourceSQLConnectionModel
      )[];
      namespace Responses {
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace ImportKnowledgeAdminKnowledgeImportPost {
      /**
       * Payload
       */
      export type RequestBody = /* KnowledgeStructuredModel */ (
        | Components.Schemas.KnowledgeStructuredModel
        | /* KnowledgeUnstructuredModel */ Components.Schemas.KnowledgeUnstructuredModel
        | /* KnowledgeSqlModel */ Components.Schemas.KnowledgeSqlModel
      )[];
      namespace Responses {
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace MenInBlackChatbotGoogleChatMenInBlackPost {
      export type RequestBody = /* ChatEvent */ Components.Schemas.ChatEvent;
      namespace Responses {
        /**
         * Response Men In Black Chatbot Google Chat Men In Black Post
         */
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace MessagesByThreadAndProfileProfileChatThreadsThreadGet {
      namespace Parameters {
        /**
         * Limit
         */
        export type Limit = number;
        /**
         * Profile
         */
        export type Profile = string;
        /**
         * Skip
         */
        export type Skip = number;
        /**
         * Thread
         */
        export type Thread = string;
      }
      export interface PathParameters {
        thread: /* Thread */ Parameters.Thread;
      }
      export interface QueryParameters {
        profile: /* Profile */ Parameters.Profile;
        skip?: /* Skip */ Parameters.Skip;
        limit?: /* Limit */ Parameters.Limit;
      }
      namespace Responses {
        /**
         * Response Messages By Thread And Profile Profile Chat Threads  Thread  Get
         */
        export type $200 = /* Message */ Components.Schemas.Message[];
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace PersistProfileChatPersistPost {
      export type RequestBody = /* Message */ Components.Schemas.Message;
      namespace Responses {
        export type $200 = /* Message */ Components.Schemas.Message;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace SaveSettingProfileSettingsSaveSettingsPost {
      export type RequestBody = /* ChatEvent */ Components.Schemas.ChatEvent;
      namespace Responses {
        /**
         * Response Savesetting Profile Settings Save Settings Post
         */
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace StoreUploadedFileUserFilesUploadFilePost {
      export type RequestBody =
        /* Body_store_uploaded_file_user_files_upload_file_post */ Components.Schemas.BodyStoreUploadedFileUserFilesUploadFilePost;
      namespace Responses {
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace ThreadsProfileChatThreadsGet {
      namespace Parameters {
        /**
         * Limit
         */
        export type Limit = number;
        /**
         * Profile
         */
        export type Profile = string;
        /**
         * Skip
         */
        export type Skip = number;
      }
      export interface QueryParameters {
        profile: /* Profile */ Parameters.Profile;
        skip?: /* Skip */ Parameters.Skip;
        limit?: /* Limit */ Parameters.Limit;
      }
      namespace Responses {
        /**
         * Response Threads Profile Chat Threads  Get
         */
        export type $200 = /* Thread */ Components.Schemas.Thread[];
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace UpdateKnowledgeAdminKnowledgeSqlUpdatePost {
      export type RequestBody =
        /* KnowledgeSqlModel */ Components.Schemas.KnowledgeSqlModel;
      namespace Responses {
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace UpdatePathAdminRouterUpdateIndicatorPut {
      namespace Parameters {
        /**
         * Indicator
         */
        export type Indicator = string;
        /**
         * New Description
         */
        export type NewDescription = /* New Description */ string | null;
      }
      export interface PathParameters {
        indicator: /* Indicator */ Parameters.Indicator;
      }
      export interface QueryParameters {
        new_description?: /* New Description */ Parameters.NewDescription;
      }
      namespace Responses {
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace UpdateToolAdminKnowledgeToolUpdatePost {
      export type RequestBody =
        /* KnowledgeToolModel */ Components.Schemas.KnowledgeToolModel;
      namespace Responses {
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace UpdateVectorIndexAdminVectorIndexDeleteVectorIndexNameDelete {
      export type RequestBody =
        /* VectorIndexModel */ Components.Schemas.VectorIndexModel;
      namespace Responses {
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
    namespace UpdateVectorIndexAdminVectorIndexUpdatePost {
      export type RequestBody =
        /* VectorIndexModel */ Components.Schemas.VectorIndexModel;
      namespace Responses {
        export type $200 = any;
        export type $422 =
          /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
      }
    }
  }

  export interface OperationMethods {
    /**
     * get_paths_admin_router_export_get - Get Paths
     *
     * Función que retorna todas las posibles opciones que puede tomar el agente a la hora de contestar un prompt
     * en forma de diccionario
     */
    'get_paths_admin_router_export_get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetPathsAdminRouterExportGet.Responses.$200>;
    /**
     * get_paths_admin_router_read__indicator__get - Get Paths
     *
     * Función que retorna todas las posibles opciones que puede tomar el agente a la hora de contestar un prompt
     * en forma de diccionario
     */
    'get_paths_admin_router_read__indicator__get'(
      parameters?: Parameters<Paths.GetPathsAdminRouterReadIndicatorGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetPathsAdminRouterReadIndicatorGet.Responses.$200>;
    /**
     * create_path_admin_router_create_post - Create Path
     *
     * Función que, dados un indicador y una descripción, crea un camino en el router para esta descripción
     */
    'create_path_admin_router_create_post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreatePathAdminRouterCreatePost.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.CreatePathAdminRouterCreatePost.Responses.$200>;
    /**
     * update_path_admin_router_update__indicator__put - Update Path
     *
     * Función que, dados un indicador y una descripción nueva para SofIA, actualiza la tabla donde se
     * encuentran todas las opciones de router si el indicador recibido en la petición es válido
     */
    'update_path_admin_router_update__indicator__put'(
      parameters?: Parameters<
        Paths.UpdatePathAdminRouterUpdateIndicatorPut.QueryParameters &
          Paths.UpdatePathAdminRouterUpdateIndicatorPut.PathParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.UpdatePathAdminRouterUpdateIndicatorPut.Responses.$200>;
    /**
     * delete_path_admin_router_delete__indicator__delete - Delete Path
     */
    'delete_path_admin_router_delete__indicator__delete'(
      parameters?: Parameters<Paths.DeletePathAdminRouterDeleteIndicatorDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.DeletePathAdminRouterDeleteIndicatorDelete.Responses.$200>;
    /**
     * export_knowledge_admin_knowledge_export_get - Export Knowledge
     */
    'export_knowledge_admin_knowledge_export_get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.ExportKnowledgeAdminKnowledgeExportGet.Responses.$200>;
    /**
     * import_knowledge_admin_knowledge_import_post - Import Knowledge
     */
    'import_knowledge_admin_knowledge_import_post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ImportKnowledgeAdminKnowledgeImportPost.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.ImportKnowledgeAdminKnowledgeImportPost.Responses.$200>;
    /**
     * get_knowledge_admin_knowledge_sql_read_get - Get Knowledge
     */
    'get_knowledge_admin_knowledge_sql_read_get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetKnowledgeAdminKnowledgeSqlReadGet.Responses.$200>;
    /**
     * get_knowledge_admin_knowledge_sql_read__knowledge_name__get - Get Knowledge
     */
    'get_knowledge_admin_knowledge_sql_read__knowledge_name__get'(
      parameters?: Parameters<Paths.GetKnowledgeAdminKnowledgeSqlReadKnowledgeNameGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetKnowledgeAdminKnowledgeSqlReadKnowledgeNameGet.Responses.$200>;
    /**
     * add_knowledge_admin_knowledge_sql_create_post - Add Knowledge
     *
     * Este endpoint registra sobre la base de datos de administración un conocimiento que se ejecutará
     * periódicamente en el pod correspondiente, siempre y cuando los datos introducidos sean válidos y compatibles
     * con el índice sobre el que se quiere insertar este conocimiento.
     */
    'add_knowledge_admin_knowledge_sql_create_post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AddKnowledgeAdminKnowledgeSqlCreatePost.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.AddKnowledgeAdminKnowledgeSqlCreatePost.Responses.$200>;
    /**
     * update_knowledge_admin_knowledge_sql_update_post - Update Knowledge
     */
    'update_knowledge_admin_knowledge_sql_update_post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateKnowledgeAdminKnowledgeSqlUpdatePost.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.UpdateKnowledgeAdminKnowledgeSqlUpdatePost.Responses.$200>;
    /**
     * delete_knowledge_admin_knowledge_sql_delete__knowledge_name__delete - Delete Knowledge
     */
    'delete_knowledge_admin_knowledge_sql_delete__knowledge_name__delete'(
      parameters?: Parameters<Paths.DeleteKnowledgeAdminKnowledgeSqlDeleteKnowledgeNameDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.DeleteKnowledgeAdminKnowledgeSqlDeleteKnowledgeNameDelete.Responses.$200>;
    /**
     * add_knowledge_file_admin_knowledge_file_create_post - Add Knowledge File
     */
    'add_knowledge_file_admin_knowledge_file_create_post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AddKnowledgeFileAdminKnowledgeFileCreatePost.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.AddKnowledgeFileAdminKnowledgeFileCreatePost.Responses.$200>;
    /**
     * add_knowledge_pdf_direct_admin_knowledge_direct_addKnowledgePdfDirect_post - Add Knowledge Pdf Direct
     */
    'add_knowledge_pdf_direct_admin_knowledge_direct_addKnowledgePdfDirect_post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AddKnowledgePdfDirectAdminKnowledgeDirectAddKnowledgePdfDirectPost.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.AddKnowledgePdfDirectAdminKnowledgeDirectAddKnowledgePdfDirectPost.Responses.$201>;
    /**
     * add_knowledge_txt_direct_admin_knowledge_direct_addKnowledgeTxtDirect_post - Add Knowledge Txt Direct
     */
    'add_knowledge_txt_direct_admin_knowledge_direct_addKnowledgeTxtDirect_post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AddKnowledgeTxtDirectAdminKnowledgeDirectAddKnowledgeTxtDirectPost.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.AddKnowledgeTxtDirectAdminKnowledgeDirectAddKnowledgeTxtDirectPost.Responses.$201>;
    /**
     * add_knowledge_csv_direct_admin_knowledge_direct_addKnowledgeCsvDirect_post - Add Knowledge Csv Direct
     */
    'add_knowledge_csv_direct_admin_knowledge_direct_addKnowledgeCsvDirect_post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AddKnowledgeCsvDirectAdminKnowledgeDirectAddKnowledgeCsvDirectPost.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.AddKnowledgeCsvDirectAdminKnowledgeDirectAddKnowledgeCsvDirectPost.Responses.$201>;
    /**
     * export_datasources_admin_datasource_export_get - Export Datasources
     */
    'export_datasources_admin_datasource_export_get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.ExportDatasourcesAdminDatasourceExportGet.Responses.$200>;
    /**
     * import_datasources_admin_datasource_import_post - Import Datasources
     */
    'import_datasources_admin_datasource_import_post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ImportDatasourcesAdminDatasourceImportPost.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.ImportDatasourcesAdminDatasourceImportPost.Responses.$200>;
    /**
     * get_db_datasource_admin_datasource_database_read_get - Get Db Datasource
     */
    'get_db_datasource_admin_datasource_database_read_get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetDbDatasourceAdminDatasourceDatabaseReadGet.Responses.$200>;
    /**
     * get_db_datasource_admin_datasource_database_read__datasource_name__get - Get Db Datasource
     */
    'get_db_datasource_admin_datasource_database_read__datasource_name__get'(
      parameters?: Parameters<Paths.GetDbDatasourceAdminDatasourceDatabaseReadDatasourceNameGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetDbDatasourceAdminDatasourceDatabaseReadDatasourceNameGet.Responses.$200>;
    /**
     * add_db_datasource_admin_datasource_database_create_post - Add Db Datasource
     *
     * Función que permite añadir una base de datos como nueva fuente de conocimiento para SofIA:
     * Recibe:
     *     - Una lista de dialectos, en forma de cadena de caracteres, separados por coma
     *     - El nombre de una base de datos con la que debe conectar
     * Retorna:
     *     - TODO
     */
    'add_db_datasource_admin_datasource_database_create_post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AddDbDatasourceAdminDatasourceDatabaseCreatePost.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.AddDbDatasourceAdminDatasourceDatabaseCreatePost.Responses.$200>;
    /**
     * add_db_datasource_admin_datasource_database_update_post - Add Db Datasource
     */
    'add_db_datasource_admin_datasource_database_update_post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AddDbDatasourceAdminDatasourceDatabaseUpdatePost.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.AddDbDatasourceAdminDatasourceDatabaseUpdatePost.Responses.$200>;
    /**
     * delete_datasource_admin_datasource_database_delete__datasource_name__delete - Delete Datasource
     */
    'delete_datasource_admin_datasource_database_delete__datasource_name__delete'(
      parameters?: Parameters<Paths.DeleteDatasourceAdminDatasourceDatabaseDeleteDatasourceNameDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.DeleteDatasourceAdminDatasourceDatabaseDeleteDatasourceNameDelete.Responses.$200>;
    /**
     * get_git_datasources_admin_datasource_git_read_get - Get Git Datasources
     */
    'get_git_datasources_admin_datasource_git_read_get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetGitDatasourcesAdminDatasourceGitReadGet.Responses.$200>;
    /**
     * add_git_datasource_admin_datasource_git_create_post - Add Git Datasource
     */
    'add_git_datasource_admin_datasource_git_create_post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AddGitDatasourceAdminDatasourceGitCreatePost.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.AddGitDatasourceAdminDatasourceGitCreatePost.Responses.$200>;
    /**
     * get_tools_admin_knowledge_tool_read_get - Get Tools
     */
    'get_tools_admin_knowledge_tool_read_get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetToolsAdminKnowledgeToolReadGet.Responses.$200>;
    /**
     * get_tool_admin_knowledge_tool_read__tool_name__get - Get Tool
     */
    'get_tool_admin_knowledge_tool_read__tool_name__get'(
      parameters?: Parameters<Paths.GetToolAdminKnowledgeToolReadToolNameGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetToolAdminKnowledgeToolReadToolNameGet.Responses.$200>;
    /**
     * add_knowledge_tool_admin_knowledge_tool_create_post - Add Knowledge Tool
     */
    'add_knowledge_tool_admin_knowledge_tool_create_post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AddKnowledgeToolAdminKnowledgeToolCreatePost.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.AddKnowledgeToolAdminKnowledgeToolCreatePost.Responses.$200>;
    /**
     * update_tool_admin_knowledge_tool_update_post - Update Tool
     */
    'update_tool_admin_knowledge_tool_update_post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateToolAdminKnowledgeToolUpdatePost.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.UpdateToolAdminKnowledgeToolUpdatePost.Responses.$200>;
    /**
     * delete_tool_admin_knowledge_tool_delete__tool_name__delete - Delete Tool
     */
    'delete_tool_admin_knowledge_tool_delete__tool_name__delete'(
      parameters?: Parameters<Paths.DeleteToolAdminKnowledgeToolDeleteToolNameDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.DeleteToolAdminKnowledgeToolDeleteToolNameDelete.Responses.$200>;
    /**
     * get_vector_indexes_admin_vector_index_read_get - Get Vector Indexes
     */
    'get_vector_indexes_admin_vector_index_read_get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetVectorIndexesAdminVectorIndexReadGet.Responses.$200>;
    /**
     * get_vector_index_admin_vector_index_read__vector_index_name__get - Get Vector Index
     */
    'get_vector_index_admin_vector_index_read__vector_index_name__get'(
      parameters?: Parameters<Paths.GetVectorIndexAdminVectorIndexReadVectorIndexNameGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetVectorIndexAdminVectorIndexReadVectorIndexNameGet.Responses.$200>;
    /**
     * add_vector_index_admin_vector_index_create_post - Add Vector Index
     *
     * Endpoint que sirve para crear índices en el servicio de índices configurado
     * (AzureSearch, Qdrant, Postgres vector similarity search...)
     */
    'add_vector_index_admin_vector_index_create_post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AddVectorIndexAdminVectorIndexCreatePost.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.AddVectorIndexAdminVectorIndexCreatePost.Responses.$200>;
    /**
     * update_vector_index_admin_vector_index_update_post - Update Vector Index
     */
    'update_vector_index_admin_vector_index_update_post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateVectorIndexAdminVectorIndexUpdatePost.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.UpdateVectorIndexAdminVectorIndexUpdatePost.Responses.$200>;
    /**
     * update_vector_index_admin_vector_index_delete__vector_index_name__delete - Update Vector Index
     */
    'update_vector_index_admin_vector_index_delete__vector_index_name__delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateVectorIndexAdminVectorIndexDeleteVectorIndexNameDelete.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.UpdateVectorIndexAdminVectorIndexDeleteVectorIndexNameDelete.Responses.$200>;
    /**
     * go_chat_text_chat_post - Go
     *
     * Endpoint to chat with SofIA. Receives the following:
     * -----
     * prompt (Prompt): Complex object ->
     *
     *     text: Question asked by user
     *
     *     session_id: Identifier of that user
     *
     *
     * myfile (UploadFile): Bytes object (inherited from django) ->
     *
     *     UploadedFile object received from streamlit widget
     */
    'go_chat_text_chat_post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.GoChatTextChatPost.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GoChatTextChatPost.Responses.$200>;
    /**
     * audio_chat_chat_audio_chat_post - Audio Chat
     *
     * Endpoint que recibe un fichero de sonido para traducirlo a texto y usarlo como input
     * del endpoint /chat
     */
    'audio_chat_chat_audio_chat_post'(
      parameters?: Parameters<Paths.AudioChatChatAudioChatPost.QueryParameters> | null,
      data?: Paths.AudioChatChatAudioChatPost.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.AudioChatChatAudioChatPost.Responses.$200>;
    /**
     * store_uploaded_file_user_files_upload_file_post - Store Uploaded File
     *
     * Receives a file in a form, stores that file in a previously
     * defined folder in backend pod.
     */
    'store_uploaded_file_user_files_upload_file_post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.StoreUploadedFileUserFilesUploadFilePost.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.StoreUploadedFileUserFilesUploadFilePost.Responses.$200>;
    /**
     * saveSetting_profile_settings_save_settings_post - Savesetting
     *
     * Save the user settings provided by the user
     */
    'saveSetting_profile_settings_save_settings_post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.SaveSettingProfileSettingsSaveSettingsPost.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.SaveSettingProfileSettingsSaveSettingsPost.Responses.$200>;
    /**
     * getSetting_profile_settings_get_settings_post - Getsetting
     *
     * Returns the user settings assigned to the user that made the request
     */
    'getSetting_profile_settings_get_settings_post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.GetSettingProfileSettingsGetSettingsPost.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetSettingProfileSettingsGetSettingsPost.Responses.$200>;
    /**
     * persist_profile_chat_persist_post - Persist
     *
     * Registers a received message into the database
     */
    'persist_profile_chat_persist_post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PersistProfileChatPersistPost.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.PersistProfileChatPersistPost.Responses.$200>;
    /**
     * threads_profile_chat_threads__get - Threads
     *
     * Returns all the threads related to the profile that sent the request
     */
    'threads_profile_chat_threads__get'(
      parameters?: Parameters<Paths.ThreadsProfileChatThreadsGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.ThreadsProfileChatThreadsGet.Responses.$200>;
    /**
     * messages_by_thread_and_profile_profile_chat_threads__thread__get - Messages By Thread And Profile
     *
     * Given a thread identifier and a profile, returns the thread which identifier
     * matches the one given by the user, if there is any
     */
    'messages_by_thread_and_profile_profile_chat_threads__thread__get'(
      parameters?: Parameters<
        Paths.MessagesByThreadAndProfileProfileChatThreadsThreadGet.QueryParameters &
          Paths.MessagesByThreadAndProfileProfileChatThreadsThreadGet.PathParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.MessagesByThreadAndProfileProfileChatThreadsThreadGet.Responses.$200>;
    /**
     * men_in_black_chatbot_google_chat_men_in_black_post - Men In Black
     *
     * Deletes a user's history from chat database. Should be requested from GMail bot.
     */
    'men_in_black_chatbot_google_chat_men_in_black_post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.MenInBlackChatbotGoogleChatMenInBlackPost.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.MenInBlackChatbotGoogleChatMenInBlackPost.Responses.$200>;
    /**
     * clockIn_chatbot_google_chat_clock_in_post - Clockin
     *
     * Once a user has correctly set their settings, this command can be used to clock in
     * from the google chat.
     */
    'clockIn_chatbot_google_chat_clock_in_post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ClockInChatbotGoogleChatClockInPost.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.ClockInChatbotGoogleChatClockInPost.Responses.$200>;
    /**
     * clockOut_chatbot_google_chat_clock_out_post - Clockout
     *
     * Once a user has correctly set their settings, this command can be used to clock out
     * from the google chat.
     */
    'clockOut_chatbot_google_chat_clock_out_post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ClockOutChatbotGoogleChatClockOutPost.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.ClockOutChatbotGoogleChatClockOutPost.Responses.$200>;
  }

  export interface PathsDictionary {
    ['/admin/router/export']: {
      /**
       * get_paths_admin_router_export_get - Get Paths
       *
       * Función que retorna todas las posibles opciones que puede tomar el agente a la hora de contestar un prompt
       * en forma de diccionario
       */
      'get'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: any,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.GetPathsAdminRouterExportGet.Responses.$200>;
    };
    ['/admin/router/read/{indicator}']: {
      /**
       * get_paths_admin_router_read__indicator__get - Get Paths
       *
       * Función que retorna todas las posibles opciones que puede tomar el agente a la hora de contestar un prompt
       * en forma de diccionario
       */
      'get'(
        parameters?: Parameters<Paths.GetPathsAdminRouterReadIndicatorGet.PathParameters> | null,
        data?: any,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.GetPathsAdminRouterReadIndicatorGet.Responses.$200>;
    };
    ['/admin/router/create']: {
      /**
       * create_path_admin_router_create_post - Create Path
       *
       * Función que, dados un indicador y una descripción, crea un camino en el router para esta descripción
       */
      'post'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: Paths.CreatePathAdminRouterCreatePost.RequestBody,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.CreatePathAdminRouterCreatePost.Responses.$200>;
    };
    ['/admin/router/update/{indicator}']: {
      /**
       * update_path_admin_router_update__indicator__put - Update Path
       *
       * Función que, dados un indicador y una descripción nueva para SofIA, actualiza la tabla donde se
       * encuentran todas las opciones de router si el indicador recibido en la petición es válido
       */
      'put'(
        parameters?: Parameters<
          Paths.UpdatePathAdminRouterUpdateIndicatorPut.QueryParameters &
            Paths.UpdatePathAdminRouterUpdateIndicatorPut.PathParameters
        > | null,
        data?: any,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.UpdatePathAdminRouterUpdateIndicatorPut.Responses.$200>;
    };
    ['/admin/router/delete/{indicator}']: {
      /**
       * delete_path_admin_router_delete__indicator__delete - Delete Path
       */
      'delete'(
        parameters?: Parameters<Paths.DeletePathAdminRouterDeleteIndicatorDelete.PathParameters> | null,
        data?: any,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.DeletePathAdminRouterDeleteIndicatorDelete.Responses.$200>;
    };
    ['/admin/knowledge/export']: {
      /**
       * export_knowledge_admin_knowledge_export_get - Export Knowledge
       */
      'get'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: any,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.ExportKnowledgeAdminKnowledgeExportGet.Responses.$200>;
    };
    ['/admin/knowledge/import']: {
      /**
       * import_knowledge_admin_knowledge_import_post - Import Knowledge
       */
      'post'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: Paths.ImportKnowledgeAdminKnowledgeImportPost.RequestBody,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.ImportKnowledgeAdminKnowledgeImportPost.Responses.$200>;
    };
    ['/admin/knowledge/sql/read']: {
      /**
       * get_knowledge_admin_knowledge_sql_read_get - Get Knowledge
       */
      'get'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: any,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.GetKnowledgeAdminKnowledgeSqlReadGet.Responses.$200>;
    };
    ['/admin/knowledge/sql/read/{knowledge_name}']: {
      /**
       * get_knowledge_admin_knowledge_sql_read__knowledge_name__get - Get Knowledge
       */
      'get'(
        parameters?: Parameters<Paths.GetKnowledgeAdminKnowledgeSqlReadKnowledgeNameGet.PathParameters> | null,
        data?: any,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.GetKnowledgeAdminKnowledgeSqlReadKnowledgeNameGet.Responses.$200>;
    };
    ['/admin/knowledge/sql/create']: {
      /**
       * add_knowledge_admin_knowledge_sql_create_post - Add Knowledge
       *
       * Este endpoint registra sobre la base de datos de administración un conocimiento que se ejecutará
       * periódicamente en el pod correspondiente, siempre y cuando los datos introducidos sean válidos y compatibles
       * con el índice sobre el que se quiere insertar este conocimiento.
       */
      'post'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: Paths.AddKnowledgeAdminKnowledgeSqlCreatePost.RequestBody,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.AddKnowledgeAdminKnowledgeSqlCreatePost.Responses.$200>;
    };
    ['/admin/knowledge/sql/update']: {
      /**
       * update_knowledge_admin_knowledge_sql_update_post - Update Knowledge
       */
      'post'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: Paths.UpdateKnowledgeAdminKnowledgeSqlUpdatePost.RequestBody,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.UpdateKnowledgeAdminKnowledgeSqlUpdatePost.Responses.$200>;
    };
    ['/admin/knowledge/sql/delete/{knowledge_name}']: {
      /**
       * delete_knowledge_admin_knowledge_sql_delete__knowledge_name__delete - Delete Knowledge
       */
      'delete'(
        parameters?: Parameters<Paths.DeleteKnowledgeAdminKnowledgeSqlDeleteKnowledgeNameDelete.PathParameters> | null,
        data?: any,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.DeleteKnowledgeAdminKnowledgeSqlDeleteKnowledgeNameDelete.Responses.$200>;
    };
    ['/admin/knowledge/file/create']: {
      /**
       * add_knowledge_file_admin_knowledge_file_create_post - Add Knowledge File
       */
      'post'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: Paths.AddKnowledgeFileAdminKnowledgeFileCreatePost.RequestBody,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.AddKnowledgeFileAdminKnowledgeFileCreatePost.Responses.$200>;
    };
    ['/admin/knowledge_direct/addKnowledgePdfDirect']: {
      /**
       * add_knowledge_pdf_direct_admin_knowledge_direct_addKnowledgePdfDirect_post - Add Knowledge Pdf Direct
       */
      'post'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: Paths.AddKnowledgePdfDirectAdminKnowledgeDirectAddKnowledgePdfDirectPost.RequestBody,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.AddKnowledgePdfDirectAdminKnowledgeDirectAddKnowledgePdfDirectPost.Responses.$201>;
    };
    ['/admin/knowledge_direct/addKnowledgeTxtDirect']: {
      /**
       * add_knowledge_txt_direct_admin_knowledge_direct_addKnowledgeTxtDirect_post - Add Knowledge Txt Direct
       */
      'post'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: Paths.AddKnowledgeTxtDirectAdminKnowledgeDirectAddKnowledgeTxtDirectPost.RequestBody,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.AddKnowledgeTxtDirectAdminKnowledgeDirectAddKnowledgeTxtDirectPost.Responses.$201>;
    };
    ['/admin/knowledge_direct/addKnowledgeCsvDirect']: {
      /**
       * add_knowledge_csv_direct_admin_knowledge_direct_addKnowledgeCsvDirect_post - Add Knowledge Csv Direct
       */
      'post'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: Paths.AddKnowledgeCsvDirectAdminKnowledgeDirectAddKnowledgeCsvDirectPost.RequestBody,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.AddKnowledgeCsvDirectAdminKnowledgeDirectAddKnowledgeCsvDirectPost.Responses.$201>;
    };
    ['/admin/datasource/export']: {
      /**
       * export_datasources_admin_datasource_export_get - Export Datasources
       */
      'get'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: any,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.ExportDatasourcesAdminDatasourceExportGet.Responses.$200>;
    };
    ['/admin/datasource/import']: {
      /**
       * import_datasources_admin_datasource_import_post - Import Datasources
       */
      'post'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: Paths.ImportDatasourcesAdminDatasourceImportPost.RequestBody,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.ImportDatasourcesAdminDatasourceImportPost.Responses.$200>;
    };
    ['/admin/datasource/database/read']: {
      /**
       * get_db_datasource_admin_datasource_database_read_get - Get Db Datasource
       */
      'get'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: any,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.GetDbDatasourceAdminDatasourceDatabaseReadGet.Responses.$200>;
    };
    ['/admin/datasource/database/read/{datasource_name}']: {
      /**
       * get_db_datasource_admin_datasource_database_read__datasource_name__get - Get Db Datasource
       */
      'get'(
        parameters?: Parameters<Paths.GetDbDatasourceAdminDatasourceDatabaseReadDatasourceNameGet.PathParameters> | null,
        data?: any,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.GetDbDatasourceAdminDatasourceDatabaseReadDatasourceNameGet.Responses.$200>;
    };
    ['/admin/datasource/database/create']: {
      /**
       * add_db_datasource_admin_datasource_database_create_post - Add Db Datasource
       *
       * Función que permite añadir una base de datos como nueva fuente de conocimiento para SofIA:
       * Recibe:
       *     - Una lista de dialectos, en forma de cadena de caracteres, separados por coma
       *     - El nombre de una base de datos con la que debe conectar
       * Retorna:
       *     - TODO
       */
      'post'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: Paths.AddDbDatasourceAdminDatasourceDatabaseCreatePost.RequestBody,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.AddDbDatasourceAdminDatasourceDatabaseCreatePost.Responses.$200>;
    };
    ['/admin/datasource/database/update']: {
      /**
       * add_db_datasource_admin_datasource_database_update_post - Add Db Datasource
       */
      'post'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: Paths.AddDbDatasourceAdminDatasourceDatabaseUpdatePost.RequestBody,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.AddDbDatasourceAdminDatasourceDatabaseUpdatePost.Responses.$200>;
    };
    ['/admin/datasource/database/delete/{datasource_name}']: {
      /**
       * delete_datasource_admin_datasource_database_delete__datasource_name__delete - Delete Datasource
       */
      'delete'(
        parameters?: Parameters<Paths.DeleteDatasourceAdminDatasourceDatabaseDeleteDatasourceNameDelete.PathParameters> | null,
        data?: any,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.DeleteDatasourceAdminDatasourceDatabaseDeleteDatasourceNameDelete.Responses.$200>;
    };
    ['/admin/datasource/git/read']: {
      /**
       * get_git_datasources_admin_datasource_git_read_get - Get Git Datasources
       */
      'get'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: any,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.GetGitDatasourcesAdminDatasourceGitReadGet.Responses.$200>;
    };
    ['/admin/datasource/git/create']: {
      /**
       * add_git_datasource_admin_datasource_git_create_post - Add Git Datasource
       */
      'post'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: Paths.AddGitDatasourceAdminDatasourceGitCreatePost.RequestBody,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.AddGitDatasourceAdminDatasourceGitCreatePost.Responses.$200>;
    };
    ['/admin/knowledge_tool/read']: {
      /**
       * get_tools_admin_knowledge_tool_read_get - Get Tools
       */
      'get'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: any,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.GetToolsAdminKnowledgeToolReadGet.Responses.$200>;
    };
    ['/admin/knowledge_tool/read/{tool_name}']: {
      /**
       * get_tool_admin_knowledge_tool_read__tool_name__get - Get Tool
       */
      'get'(
        parameters?: Parameters<Paths.GetToolAdminKnowledgeToolReadToolNameGet.PathParameters> | null,
        data?: any,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.GetToolAdminKnowledgeToolReadToolNameGet.Responses.$200>;
    };
    ['/admin/knowledge_tool/create']: {
      /**
       * add_knowledge_tool_admin_knowledge_tool_create_post - Add Knowledge Tool
       */
      'post'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: Paths.AddKnowledgeToolAdminKnowledgeToolCreatePost.RequestBody,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.AddKnowledgeToolAdminKnowledgeToolCreatePost.Responses.$200>;
    };
    ['/admin/knowledge_tool/update']: {
      /**
       * update_tool_admin_knowledge_tool_update_post - Update Tool
       */
      'post'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: Paths.UpdateToolAdminKnowledgeToolUpdatePost.RequestBody,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.UpdateToolAdminKnowledgeToolUpdatePost.Responses.$200>;
    };
    ['/admin/knowledge_tool/delete/{tool_name}']: {
      /**
       * delete_tool_admin_knowledge_tool_delete__tool_name__delete - Delete Tool
       */
      'delete'(
        parameters?: Parameters<Paths.DeleteToolAdminKnowledgeToolDeleteToolNameDelete.PathParameters> | null,
        data?: any,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.DeleteToolAdminKnowledgeToolDeleteToolNameDelete.Responses.$200>;
    };
    ['/admin/vector_index/read']: {
      /**
       * get_vector_indexes_admin_vector_index_read_get - Get Vector Indexes
       */
      'get'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: any,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.GetVectorIndexesAdminVectorIndexReadGet.Responses.$200>;
    };
    ['/admin/vector_index/read/{vector_index_name}']: {
      /**
       * get_vector_index_admin_vector_index_read__vector_index_name__get - Get Vector Index
       */
      'get'(
        parameters?: Parameters<Paths.GetVectorIndexAdminVectorIndexReadVectorIndexNameGet.PathParameters> | null,
        data?: any,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.GetVectorIndexAdminVectorIndexReadVectorIndexNameGet.Responses.$200>;
    };
    ['/admin/vector_index/create']: {
      /**
       * add_vector_index_admin_vector_index_create_post - Add Vector Index
       *
       * Endpoint que sirve para crear índices en el servicio de índices configurado
       * (AzureSearch, Qdrant, Postgres vector similarity search...)
       */
      'post'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: Paths.AddVectorIndexAdminVectorIndexCreatePost.RequestBody,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.AddVectorIndexAdminVectorIndexCreatePost.Responses.$200>;
    };
    ['/admin/vector_index/update']: {
      /**
       * update_vector_index_admin_vector_index_update_post - Update Vector Index
       */
      'post'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: Paths.UpdateVectorIndexAdminVectorIndexUpdatePost.RequestBody,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.UpdateVectorIndexAdminVectorIndexUpdatePost.Responses.$200>;
    };
    ['/admin/vector_index/delete/{vector_index_name}']: {
      /**
       * update_vector_index_admin_vector_index_delete__vector_index_name__delete - Update Vector Index
       */
      'delete'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: Paths.UpdateVectorIndexAdminVectorIndexDeleteVectorIndexNameDelete.RequestBody,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.UpdateVectorIndexAdminVectorIndexDeleteVectorIndexNameDelete.Responses.$200>;
    };
    ['/chat/text_chat']: {
      /**
       * go_chat_text_chat_post - Go
       *
       * Endpoint to chat with SofIA. Receives the following:
       * -----
       * prompt (Prompt): Complex object ->
       *
       *     text: Question asked by user
       *
       *     session_id: Identifier of that user
       *
       *
       * myfile (UploadFile): Bytes object (inherited from django) ->
       *
       *     UploadedFile object received from streamlit widget
       */
      'post'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: Paths.GoChatTextChatPost.RequestBody,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.GoChatTextChatPost.Responses.$200>;
    };
    ['/chat/audio_chat']: {
      /**
       * audio_chat_chat_audio_chat_post - Audio Chat
       *
       * Endpoint que recibe un fichero de sonido para traducirlo a texto y usarlo como input
       * del endpoint /chat
       */
      'post'(
        parameters?: Parameters<Paths.AudioChatChatAudioChatPost.QueryParameters> | null,
        data?: Paths.AudioChatChatAudioChatPost.RequestBody,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.AudioChatChatAudioChatPost.Responses.$200>;
    };
    ['/user_files/upload_file']: {
      /**
       * store_uploaded_file_user_files_upload_file_post - Store Uploaded File
       *
       * Receives a file in a form, stores that file in a previously
       * defined folder in backend pod.
       */
      'post'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: Paths.StoreUploadedFileUserFilesUploadFilePost.RequestBody,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.StoreUploadedFileUserFilesUploadFilePost.Responses.$200>;
    };
    ['/profile/settings/save_settings']: {
      /**
       * saveSetting_profile_settings_save_settings_post - Savesetting
       *
       * Save the user settings provided by the user
       */
      'post'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: Paths.SaveSettingProfileSettingsSaveSettingsPost.RequestBody,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.SaveSettingProfileSettingsSaveSettingsPost.Responses.$200>;
    };
    ['/profile/settings/get_settings']: {
      /**
       * getSetting_profile_settings_get_settings_post - Getsetting
       *
       * Returns the user settings assigned to the user that made the request
       */
      'post'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: Paths.GetSettingProfileSettingsGetSettingsPost.RequestBody,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.GetSettingProfileSettingsGetSettingsPost.Responses.$200>;
    };
    ['/profile/chat/persist']: {
      /**
       * persist_profile_chat_persist_post - Persist
       *
       * Registers a received message into the database
       */
      'post'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: Paths.PersistProfileChatPersistPost.RequestBody,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.PersistProfileChatPersistPost.Responses.$200>;
    };
    ['/profile/chat/threads/']: {
      /**
       * threads_profile_chat_threads__get - Threads
       *
       * Returns all the threads related to the profile that sent the request
       */
      'get'(
        parameters?: Parameters<Paths.ThreadsProfileChatThreadsGet.QueryParameters> | null,
        data?: any,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.ThreadsProfileChatThreadsGet.Responses.$200>;
    };
    ['/profile/chat/threads/{thread}']: {
      /**
       * messages_by_thread_and_profile_profile_chat_threads__thread__get - Messages By Thread And Profile
       *
       * Given a thread identifier and a profile, returns the thread which identifier
       * matches the one given by the user, if there is any
       */
      'get'(
        parameters?: Parameters<
          Paths.MessagesByThreadAndProfileProfileChatThreadsThreadGet.QueryParameters &
            Paths.MessagesByThreadAndProfileProfileChatThreadsThreadGet.PathParameters
        > | null,
        data?: any,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.MessagesByThreadAndProfileProfileChatThreadsThreadGet.Responses.$200>;
    };
    ['/chatbot/google_chat/men_in_black']: {
      /**
       * men_in_black_chatbot_google_chat_men_in_black_post - Men In Black
       *
       * Deletes a user's history from chat database. Should be requested from GMail bot.
       */
      'post'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: Paths.MenInBlackChatbotGoogleChatMenInBlackPost.RequestBody,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.MenInBlackChatbotGoogleChatMenInBlackPost.Responses.$200>;
    };
    ['/chatbot/google_chat/clock_in']: {
      /**
       * clockIn_chatbot_google_chat_clock_in_post - Clockin
       *
       * Once a user has correctly set their settings, this command can be used to clock in
       * from the google chat.
       */
      'post'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: Paths.ClockInChatbotGoogleChatClockInPost.RequestBody,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.ClockInChatbotGoogleChatClockInPost.Responses.$200>;
    };
    ['/chatbot/google_chat/clock_out']: {
      /**
       * clockOut_chatbot_google_chat_clock_out_post - Clockout
       *
       * Once a user has correctly set their settings, this command can be used to clock out
       * from the google chat.
       */
      'post'(
        parameters?: Parameters<UnknownParamsObject> | null,
        data?: Paths.ClockOutChatbotGoogleChatClockOutPost.RequestBody,
        config?: AxiosRequestConfig
      ): OperationResponse<Paths.ClockOutChatbotGoogleChatClockOutPost.Responses.$200>;
    };
  }

  export type Client = OpenAPIClient<OperationMethods, PathsDictionary>;
  declare global {
    namespace AstroOpenAPI {
      export { Client };
    }
  }
}
