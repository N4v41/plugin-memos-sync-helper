import {DataSave} from "@/controllers/plugin/v2/data-save/index";
import {IResHandleDataV2} from "@/types/memos/v2/handle";
import {deleteMode} from "@/constants/plugin";
import {debugMessage} from "@/utils";
import {pluginConfigData} from "@/index";
import {DataHandle} from "@/controllers/plugin/v2/data-handle";


export class DailyNotes extends DataSave {

    constructor(data: IResHandleDataV2) {
        super(data);
        this.nowDeleteMode = deleteMode.blockId;
    }


    protected async batchSave(): Promise<void> {
        DataHandle.sortMemos(this.data.newMemos, true);

        for (let newMemo of this.data.newMemos) {
            debugMessage(pluginConfigData.debug.isDebug, "正在写入", newMemo);

            await this.saveDailyNotes(newMemo);

            debugMessage(pluginConfigData.debug.isDebug, `Memos/${newMemo.id} 写入完成`);
        }
    }

    static async runSync(data: IResHandleDataV2) {
        let dn = new DailyNotes(data);
        await dn.main();
    }
}