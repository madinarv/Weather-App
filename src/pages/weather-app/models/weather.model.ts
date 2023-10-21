export default class WeatherModel {
    public id: number | null = null;
    // public name: string | null = null;
    // public description: string | null = null;
    // public price: string | null = null;
    public date: number | undefined;
    // public hour: number | undefined;


    constructor(item: any) {
        this._setId(item);
        // this._setName(item);
        // this._setDescription(item);
        // this._setPrice(item);
        // this._setDate(item);
        // this._setHour(item);
    } 

    /**
     * set date
     * @param date
     * @private
     */
    // eslint-disable-next-line camelcase
    private _setDate({dt_txt}: any) {
        // eslint-disable-next-line camelcase
        this.date = dt_txt.split(' ')[0].split('-').reverse().join('.');
    }

    // /**
    //  * set hour
    //  * @param hour
    //  * @private
    //  */
    // // eslint-disable-next-line camelcase
    // private _setHour({dt_txt}: any) {
    //     // eslint-disable-next-line camelcase
    //     this.hour = dt_txt.split(' ')[1].split('-').reverse().join('.');
    // }


    /**
     * set id
     * @param id
     * @private
     */
    private _setId({_id,}: any) {
        this.id = _id;
    }

    // /**
    //  * set name
    //  * @param name
    //  * @private
    //  */
    // _setName({name,}: any) {
    //     this.name = name;
    // }

    // /**
    //  * set description
    //  * @param description
    //  * @private
    //  */
    // _setDescription({description,}: any) {
    //     this.description = description;
    // }

    // /**
    //  * set price
    //  * @param price
    //  * @private
    //  */
    // _setPrice({price,}: any) {
    //     this.price = price;
    // }

}
