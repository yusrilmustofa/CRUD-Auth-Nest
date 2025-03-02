import { BaseTransformer } from "src/transformer.base"
export class UserTransformer extends BaseTransformer {
    static singleTransform (element) {
        return {
            id: element.id,
            name: element.name,
            email: element.email
        }
    }
}