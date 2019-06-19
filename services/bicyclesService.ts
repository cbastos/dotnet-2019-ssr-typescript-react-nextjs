export class BicyclesService {
    getModels(): Promise<Array<Model>> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(
                    [
                        { id: 1, name: 'model 1' },
                        { id: 2, name: 'model 2' },
                        { id: 3, name: 'model 3' },
                        { id: 4, name: 'model 4' },
                        { id: 5, name: 'model 5' }
                    ]
                )
            }, 1000);
        });
    }
}

class Model {
    id: number;
    name: string;
}