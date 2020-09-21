enum TYPES {
  UPDATE_NEAREST_WORKERS,
  UPDATE_NEW_WORKERS,
  UPDATE_WORKER_DETAIL_DATA
}

export namespace WorkerMetadata {
  export interface IWorker {
    id : number;
    availability : string;
    location : string;
    basePrice : number;
    createdAt : Date;
    backgroundImage : string;
    user : {
      name : string;
      lastname : string;
      profileImage : string;
      district: {
        name : string;
        province : {
          name : string;
        }        
      };
      description : string;
    },
    specialty : {
      name : string;
    }
  }

  export interface IStore {
    main : {
      workersNearestLoading : boolean;
      workersNearest : IWorker[],
      workersNewLoading : boolean;
      workersNew : IWorker[],    
    },
    search : {
      isLoadingSearch : boolean;
      workers : IWorker[]
    },
    detailData : Partial<IWorker>;
  }
}

export default TYPES;