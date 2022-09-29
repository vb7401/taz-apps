// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import { ethereum, JSONValue, TypedMap, Entity, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"

export class Approval extends ethereum.Event {
    get params(): Approval__Params {
        return new Approval__Params(this)
    }
}

export class Approval__Params {
    _event: Approval

    constructor(event: Approval) {
        this._event = event
    }

    get owner(): Address {
        return this._event.parameters[0].value.toAddress()
    }

    get approved(): Address {
        return this._event.parameters[1].value.toAddress()
    }

    get tokenId(): BigInt {
        return this._event.parameters[2].value.toBigInt()
    }
}

export class ApprovalForAll extends ethereum.Event {
    get params(): ApprovalForAll__Params {
        return new ApprovalForAll__Params(this)
    }
}

export class ApprovalForAll__Params {
    _event: ApprovalForAll

    constructor(event: ApprovalForAll) {
        this._event = event
    }

    get owner(): Address {
        return this._event.parameters[0].value.toAddress()
    }

    get operator(): Address {
        return this._event.parameters[1].value.toAddress()
    }

    get approved(): boolean {
        return this._event.parameters[2].value.toBoolean()
    }
}

export class NewToken extends ethereum.Event {
    get params(): NewToken__Params {
        return new NewToken__Params(this)
    }
}

export class NewToken__Params {
    _event: NewToken

    constructor(event: NewToken) {
        this._event = event
    }

    get tokenId(): BigInt {
        return this._event.parameters[0].value.toBigInt()
    }

    get uri(): string {
        return this._event.parameters[1].value.toString()
    }
}

export class RoleAdminChanged extends ethereum.Event {
    get params(): RoleAdminChanged__Params {
        return new RoleAdminChanged__Params(this)
    }
}

export class RoleAdminChanged__Params {
    _event: RoleAdminChanged

    constructor(event: RoleAdminChanged) {
        this._event = event
    }

    get role(): Bytes {
        return this._event.parameters[0].value.toBytes()
    }

    get previousAdminRole(): Bytes {
        return this._event.parameters[1].value.toBytes()
    }

    get newAdminRole(): Bytes {
        return this._event.parameters[2].value.toBytes()
    }
}

export class RoleGranted extends ethereum.Event {
    get params(): RoleGranted__Params {
        return new RoleGranted__Params(this)
    }
}

export class RoleGranted__Params {
    _event: RoleGranted

    constructor(event: RoleGranted) {
        this._event = event
    }

    get role(): Bytes {
        return this._event.parameters[0].value.toBytes()
    }

    get account(): Address {
        return this._event.parameters[1].value.toAddress()
    }

    get sender(): Address {
        return this._event.parameters[2].value.toAddress()
    }
}

export class RoleRevoked extends ethereum.Event {
    get params(): RoleRevoked__Params {
        return new RoleRevoked__Params(this)
    }
}

export class RoleRevoked__Params {
    _event: RoleRevoked

    constructor(event: RoleRevoked) {
        this._event = event
    }

    get role(): Bytes {
        return this._event.parameters[0].value.toBytes()
    }

    get account(): Address {
        return this._event.parameters[1].value.toAddress()
    }

    get sender(): Address {
        return this._event.parameters[2].value.toAddress()
    }
}

export class Transfer extends ethereum.Event {
    get params(): Transfer__Params {
        return new Transfer__Params(this)
    }
}

export class Transfer__Params {
    _event: Transfer

    constructor(event: Transfer) {
        this._event = event
    }

    get from(): Address {
        return this._event.parameters[0].value.toAddress()
    }

    get to(): Address {
        return this._event.parameters[1].value.toAddress()
    }

    get tokenId(): BigInt {
        return this._event.parameters[2].value.toBigInt()
    }
}

export class ViolationAdded extends ethereum.Event {
    get params(): ViolationAdded__Params {
        return new ViolationAdded__Params(this)
    }
}

export class ViolationAdded__Params {
    _event: ViolationAdded

    constructor(event: ViolationAdded) {
        this._event = event
    }

    get tokenId(): BigInt {
        return this._event.parameters[0].value.toBigInt()
    }

    get reviewer(): Address {
        return this._event.parameters[1].value.toAddress()
    }
}

export class VoteAdded extends ethereum.Event {
    get params(): VoteAdded__Params {
        return new VoteAdded__Params(this)
    }
}

export class VoteAdded__Params {
    _event: VoteAdded

    constructor(event: VoteAdded) {
        this._event = event
    }

    get tokenId(): BigInt {
        return this._event.parameters[0].value.toBigInt()
    }
}

export class TazToken extends ethereum.SmartContract {
    static bind(address: Address): TazToken {
        return new TazToken("TazToken", address)
    }

    DEFAULT_ADMIN_ROLE(): Bytes {
        let result = super.call("DEFAULT_ADMIN_ROLE", "DEFAULT_ADMIN_ROLE():(bytes32)", [])

        return result[0].toBytes()
    }

    try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
        let result = super.tryCall("DEFAULT_ADMIN_ROLE", "DEFAULT_ADMIN_ROLE():(bytes32)", [])
        if (result.reverted) {
            return new ethereum.CallResult()
        }
        let value = result.value
        return ethereum.CallResult.fromValue(value[0].toBytes())
    }

    REVIEWER_ROLE(): Bytes {
        let result = super.call("REVIEWER_ROLE", "REVIEWER_ROLE():(bytes32)", [])

        return result[0].toBytes()
    }

    try_REVIEWER_ROLE(): ethereum.CallResult<Bytes> {
        let result = super.tryCall("REVIEWER_ROLE", "REVIEWER_ROLE():(bytes32)", [])
        if (result.reverted) {
            return new ethereum.CallResult()
        }
        let value = result.value
        return ethereum.CallResult.fromValue(value[0].toBytes())
    }

    START_STOPPER_ROLE(): Bytes {
        let result = super.call("START_STOPPER_ROLE", "START_STOPPER_ROLE():(bytes32)", [])

        return result[0].toBytes()
    }

    try_START_STOPPER_ROLE(): ethereum.CallResult<Bytes> {
        let result = super.tryCall("START_STOPPER_ROLE", "START_STOPPER_ROLE():(bytes32)", [])
        if (result.reverted) {
            return new ethereum.CallResult()
        }
        let value = result.value
        return ethereum.CallResult.fromValue(value[0].toBytes())
    }

    TAZ_ADMIN_ROLE(): Bytes {
        let result = super.call("TAZ_ADMIN_ROLE", "TAZ_ADMIN_ROLE():(bytes32)", [])

        return result[0].toBytes()
    }

    try_TAZ_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
        let result = super.tryCall("TAZ_ADMIN_ROLE", "TAZ_ADMIN_ROLE():(bytes32)", [])
        if (result.reverted) {
            return new ethereum.CallResult()
        }
        let value = result.value
        return ethereum.CallResult.fromValue(value[0].toBytes())
    }

    balanceOf(owner: Address): BigInt {
        let result = super.call("balanceOf", "balanceOf(address):(uint256)", [ethereum.Value.fromAddress(owner)])

        return result[0].toBigInt()
    }

    try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
        let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [ethereum.Value.fromAddress(owner)])
        if (result.reverted) {
            return new ethereum.CallResult()
        }
        let value = result.value
        return ethereum.CallResult.fromValue(value[0].toBigInt())
    }

    getApproved(tokenId: BigInt): Address {
        let result = super.call("getApproved", "getApproved(uint256):(address)", [
            ethereum.Value.fromUnsignedBigInt(tokenId)
        ])

        return result[0].toAddress()
    }

    try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
        let result = super.tryCall("getApproved", "getApproved(uint256):(address)", [
            ethereum.Value.fromUnsignedBigInt(tokenId)
        ])
        if (result.reverted) {
            return new ethereum.CallResult()
        }
        let value = result.value
        return ethereum.CallResult.fromValue(value[0].toAddress())
    }

    getRoleAdmin(role: Bytes): Bytes {
        let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
            ethereum.Value.fromFixedBytes(role)
        ])

        return result[0].toBytes()
    }

    try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
        let result = super.tryCall("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
            ethereum.Value.fromFixedBytes(role)
        ])
        if (result.reverted) {
            return new ethereum.CallResult()
        }
        let value = result.value
        return ethereum.CallResult.fromValue(value[0].toBytes())
    }

    hasRole(role: Bytes, account: Address): boolean {
        let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
            ethereum.Value.fromFixedBytes(role),
            ethereum.Value.fromAddress(account)
        ])

        return result[0].toBoolean()
    }

    try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
        let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
            ethereum.Value.fromFixedBytes(role),
            ethereum.Value.fromAddress(account)
        ])
        if (result.reverted) {
            return new ethereum.CallResult()
        }
        let value = result.value
        return ethereum.CallResult.fromValue(value[0].toBoolean())
    }

    isApprovedForAll(owner: Address, operator: Address): boolean {
        let result = super.call("isApprovedForAll", "isApprovedForAll(address,address):(bool)", [
            ethereum.Value.fromAddress(owner),
            ethereum.Value.fromAddress(operator)
        ])

        return result[0].toBoolean()
    }

    try_isApprovedForAll(owner: Address, operator: Address): ethereum.CallResult<boolean> {
        let result = super.tryCall("isApprovedForAll", "isApprovedForAll(address,address):(bool)", [
            ethereum.Value.fromAddress(owner),
            ethereum.Value.fromAddress(operator)
        ])
        if (result.reverted) {
            return new ethereum.CallResult()
        }
        let value = result.value
        return ethereum.CallResult.fromValue(value[0].toBoolean())
    }

    name(): string {
        let result = super.call("name", "name():(string)", [])

        return result[0].toString()
    }

    try_name(): ethereum.CallResult<string> {
        let result = super.tryCall("name", "name():(string)", [])
        if (result.reverted) {
            return new ethereum.CallResult()
        }
        let value = result.value
        return ethereum.CallResult.fromValue(value[0].toString())
    }

    ownerOf(tokenId: BigInt): Address {
        let result = super.call("ownerOf", "ownerOf(uint256):(address)", [ethereum.Value.fromUnsignedBigInt(tokenId)])

        return result[0].toAddress()
    }

    try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
        let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
            ethereum.Value.fromUnsignedBigInt(tokenId)
        ])
        if (result.reverted) {
            return new ethereum.CallResult()
        }
        let value = result.value
        return ethereum.CallResult.fromValue(value[0].toAddress())
    }

    safeMint(
        to: Address,
        uri: string,
        groupId: BigInt,
        merkleTreeRoot: BigInt,
        signal: Bytes,
        nullifierHash: BigInt,
        externalNullifier: BigInt,
        proof: Array<BigInt>
    ): BigInt {
        let result = super.call(
            "safeMint",
            "safeMint(address,string,uint256,uint256,bytes32,uint256,uint256,uint256[8]):(uint256)",
            [
                ethereum.Value.fromAddress(to),
                ethereum.Value.fromString(uri),
                ethereum.Value.fromUnsignedBigInt(groupId),
                ethereum.Value.fromUnsignedBigInt(merkleTreeRoot),
                ethereum.Value.fromFixedBytes(signal),
                ethereum.Value.fromUnsignedBigInt(nullifierHash),
                ethereum.Value.fromUnsignedBigInt(externalNullifier),
                ethereum.Value.fromUnsignedBigIntArray(proof)
            ]
        )

        return result[0].toBigInt()
    }

    try_safeMint(
        to: Address,
        uri: string,
        groupId: BigInt,
        merkleTreeRoot: BigInt,
        signal: Bytes,
        nullifierHash: BigInt,
        externalNullifier: BigInt,
        proof: Array<BigInt>
    ): ethereum.CallResult<BigInt> {
        let result = super.tryCall(
            "safeMint",
            "safeMint(address,string,uint256,uint256,bytes32,uint256,uint256,uint256[8]):(uint256)",
            [
                ethereum.Value.fromAddress(to),
                ethereum.Value.fromString(uri),
                ethereum.Value.fromUnsignedBigInt(groupId),
                ethereum.Value.fromUnsignedBigInt(merkleTreeRoot),
                ethereum.Value.fromFixedBytes(signal),
                ethereum.Value.fromUnsignedBigInt(nullifierHash),
                ethereum.Value.fromUnsignedBigInt(externalNullifier),
                ethereum.Value.fromUnsignedBigIntArray(proof)
            ]
        )
        if (result.reverted) {
            return new ethereum.CallResult()
        }
        let value = result.value
        return ethereum.CallResult.fromValue(value[0].toBigInt())
    }

    semaContract(): Address {
        let result = super.call("semaContract", "semaContract():(address)", [])

        return result[0].toAddress()
    }

    try_semaContract(): ethereum.CallResult<Address> {
        let result = super.tryCall("semaContract", "semaContract():(address)", [])
        if (result.reverted) {
            return new ethereum.CallResult()
        }
        let value = result.value
        return ethereum.CallResult.fromValue(value[0].toAddress())
    }

    supportsInterface(interfaceId: Bytes): boolean {
        let result = super.call("supportsInterface", "supportsInterface(bytes4):(bool)", [
            ethereum.Value.fromFixedBytes(interfaceId)
        ])

        return result[0].toBoolean()
    }

    try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
        let result = super.tryCall("supportsInterface", "supportsInterface(bytes4):(bool)", [
            ethereum.Value.fromFixedBytes(interfaceId)
        ])
        if (result.reverted) {
            return new ethereum.CallResult()
        }
        let value = result.value
        return ethereum.CallResult.fromValue(value[0].toBoolean())
    }

    symbol(): string {
        let result = super.call("symbol", "symbol():(string)", [])

        return result[0].toString()
    }

    try_symbol(): ethereum.CallResult<string> {
        let result = super.tryCall("symbol", "symbol():(string)", [])
        if (result.reverted) {
            return new ethereum.CallResult()
        }
        let value = result.value
        return ethereum.CallResult.fromValue(value[0].toString())
    }

    tokenURI(tokenId: BigInt): string {
        let result = super.call("tokenURI", "tokenURI(uint256):(string)", [ethereum.Value.fromUnsignedBigInt(tokenId)])

        return result[0].toString()
    }

    try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
        let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
            ethereum.Value.fromUnsignedBigInt(tokenId)
        ])
        if (result.reverted) {
            return new ethereum.CallResult()
        }
        let value = result.value
        return ethereum.CallResult.fromValue(value[0].toString())
    }
}

export class ConstructorCall extends ethereum.Call {
    get inputs(): ConstructorCall__Inputs {
        return new ConstructorCall__Inputs(this)
    }

    get outputs(): ConstructorCall__Outputs {
        return new ConstructorCall__Outputs(this)
    }
}

export class ConstructorCall__Inputs {
    _call: ConstructorCall

    constructor(call: ConstructorCall) {
        this._call = call
    }

    get semaContractAddr(): Address {
        return this._call.inputValues[0].value.toAddress()
    }
}

export class ConstructorCall__Outputs {
    _call: ConstructorCall

    constructor(call: ConstructorCall) {
        this._call = call
    }
}

export class AddAdminsCall extends ethereum.Call {
    get inputs(): AddAdminsCall__Inputs {
        return new AddAdminsCall__Inputs(this)
    }

    get outputs(): AddAdminsCall__Outputs {
        return new AddAdminsCall__Outputs(this)
    }
}

export class AddAdminsCall__Inputs {
    _call: AddAdminsCall

    constructor(call: AddAdminsCall) {
        this._call = call
    }

    get admins(): Array<Address> {
        return this._call.inputValues[0].value.toAddressArray()
    }
}

export class AddAdminsCall__Outputs {
    _call: AddAdminsCall

    constructor(call: AddAdminsCall) {
        this._call = call
    }
}

export class AddReviewersCall extends ethereum.Call {
    get inputs(): AddReviewersCall__Inputs {
        return new AddReviewersCall__Inputs(this)
    }

    get outputs(): AddReviewersCall__Outputs {
        return new AddReviewersCall__Outputs(this)
    }
}

export class AddReviewersCall__Inputs {
    _call: AddReviewersCall

    constructor(call: AddReviewersCall) {
        this._call = call
    }

    get reviewers(): Array<Address> {
        return this._call.inputValues[0].value.toAddressArray()
    }
}

export class AddReviewersCall__Outputs {
    _call: AddReviewersCall

    constructor(call: AddReviewersCall) {
        this._call = call
    }
}

export class AddStartStoppersCall extends ethereum.Call {
    get inputs(): AddStartStoppersCall__Inputs {
        return new AddStartStoppersCall__Inputs(this)
    }

    get outputs(): AddStartStoppersCall__Outputs {
        return new AddStartStoppersCall__Outputs(this)
    }
}

export class AddStartStoppersCall__Inputs {
    _call: AddStartStoppersCall

    constructor(call: AddStartStoppersCall) {
        this._call = call
    }

    get startStoppers(): Array<Address> {
        return this._call.inputValues[0].value.toAddressArray()
    }
}

export class AddStartStoppersCall__Outputs {
    _call: AddStartStoppersCall

    constructor(call: AddStartStoppersCall) {
        this._call = call
    }
}

export class AddViolationCall extends ethereum.Call {
    get inputs(): AddViolationCall__Inputs {
        return new AddViolationCall__Inputs(this)
    }

    get outputs(): AddViolationCall__Outputs {
        return new AddViolationCall__Outputs(this)
    }
}

export class AddViolationCall__Inputs {
    _call: AddViolationCall

    constructor(call: AddViolationCall) {
        this._call = call
    }

    get tokenId(): BigInt {
        return this._call.inputValues[0].value.toBigInt()
    }
}

export class AddViolationCall__Outputs {
    _call: AddViolationCall

    constructor(call: AddViolationCall) {
        this._call = call
    }
}

export class ApproveCall extends ethereum.Call {
    get inputs(): ApproveCall__Inputs {
        return new ApproveCall__Inputs(this)
    }

    get outputs(): ApproveCall__Outputs {
        return new ApproveCall__Outputs(this)
    }
}

export class ApproveCall__Inputs {
    _call: ApproveCall

    constructor(call: ApproveCall) {
        this._call = call
    }

    get to(): Address {
        return this._call.inputValues[0].value.toAddress()
    }

    get tokenId(): BigInt {
        return this._call.inputValues[1].value.toBigInt()
    }
}

export class ApproveCall__Outputs {
    _call: ApproveCall

    constructor(call: ApproveCall) {
        this._call = call
    }
}

export class GrantRoleCall extends ethereum.Call {
    get inputs(): GrantRoleCall__Inputs {
        return new GrantRoleCall__Inputs(this)
    }

    get outputs(): GrantRoleCall__Outputs {
        return new GrantRoleCall__Outputs(this)
    }
}

export class GrantRoleCall__Inputs {
    _call: GrantRoleCall

    constructor(call: GrantRoleCall) {
        this._call = call
    }

    get role(): Bytes {
        return this._call.inputValues[0].value.toBytes()
    }

    get account(): Address {
        return this._call.inputValues[1].value.toAddress()
    }
}

export class GrantRoleCall__Outputs {
    _call: GrantRoleCall

    constructor(call: GrantRoleCall) {
        this._call = call
    }
}

export class RemoveAdminsCall extends ethereum.Call {
    get inputs(): RemoveAdminsCall__Inputs {
        return new RemoveAdminsCall__Inputs(this)
    }

    get outputs(): RemoveAdminsCall__Outputs {
        return new RemoveAdminsCall__Outputs(this)
    }
}

export class RemoveAdminsCall__Inputs {
    _call: RemoveAdminsCall

    constructor(call: RemoveAdminsCall) {
        this._call = call
    }

    get admins(): Array<Address> {
        return this._call.inputValues[0].value.toAddressArray()
    }
}

export class RemoveAdminsCall__Outputs {
    _call: RemoveAdminsCall

    constructor(call: RemoveAdminsCall) {
        this._call = call
    }
}

export class RemoveReviewersCall extends ethereum.Call {
    get inputs(): RemoveReviewersCall__Inputs {
        return new RemoveReviewersCall__Inputs(this)
    }

    get outputs(): RemoveReviewersCall__Outputs {
        return new RemoveReviewersCall__Outputs(this)
    }
}

export class RemoveReviewersCall__Inputs {
    _call: RemoveReviewersCall

    constructor(call: RemoveReviewersCall) {
        this._call = call
    }

    get reviewers(): Array<Address> {
        return this._call.inputValues[0].value.toAddressArray()
    }
}

export class RemoveReviewersCall__Outputs {
    _call: RemoveReviewersCall

    constructor(call: RemoveReviewersCall) {
        this._call = call
    }
}

export class RemoveStartStoppersCall extends ethereum.Call {
    get inputs(): RemoveStartStoppersCall__Inputs {
        return new RemoveStartStoppersCall__Inputs(this)
    }

    get outputs(): RemoveStartStoppersCall__Outputs {
        return new RemoveStartStoppersCall__Outputs(this)
    }
}

export class RemoveStartStoppersCall__Inputs {
    _call: RemoveStartStoppersCall

    constructor(call: RemoveStartStoppersCall) {
        this._call = call
    }

    get startStoppers(): Array<Address> {
        return this._call.inputValues[0].value.toAddressArray()
    }
}

export class RemoveStartStoppersCall__Outputs {
    _call: RemoveStartStoppersCall

    constructor(call: RemoveStartStoppersCall) {
        this._call = call
    }
}

export class RenounceRoleCall extends ethereum.Call {
    get inputs(): RenounceRoleCall__Inputs {
        return new RenounceRoleCall__Inputs(this)
    }

    get outputs(): RenounceRoleCall__Outputs {
        return new RenounceRoleCall__Outputs(this)
    }
}

export class RenounceRoleCall__Inputs {
    _call: RenounceRoleCall

    constructor(call: RenounceRoleCall) {
        this._call = call
    }

    get role(): Bytes {
        return this._call.inputValues[0].value.toBytes()
    }

    get account(): Address {
        return this._call.inputValues[1].value.toAddress()
    }
}

export class RenounceRoleCall__Outputs {
    _call: RenounceRoleCall

    constructor(call: RenounceRoleCall) {
        this._call = call
    }
}

export class RevokeRoleCall extends ethereum.Call {
    get inputs(): RevokeRoleCall__Inputs {
        return new RevokeRoleCall__Inputs(this)
    }

    get outputs(): RevokeRoleCall__Outputs {
        return new RevokeRoleCall__Outputs(this)
    }
}

export class RevokeRoleCall__Inputs {
    _call: RevokeRoleCall

    constructor(call: RevokeRoleCall) {
        this._call = call
    }

    get role(): Bytes {
        return this._call.inputValues[0].value.toBytes()
    }

    get account(): Address {
        return this._call.inputValues[1].value.toAddress()
    }
}

export class RevokeRoleCall__Outputs {
    _call: RevokeRoleCall

    constructor(call: RevokeRoleCall) {
        this._call = call
    }
}

export class SafeMintCall extends ethereum.Call {
    get inputs(): SafeMintCall__Inputs {
        return new SafeMintCall__Inputs(this)
    }

    get outputs(): SafeMintCall__Outputs {
        return new SafeMintCall__Outputs(this)
    }
}

export class SafeMintCall__Inputs {
    _call: SafeMintCall

    constructor(call: SafeMintCall) {
        this._call = call
    }

    get to(): Address {
        return this._call.inputValues[0].value.toAddress()
    }

    get uri(): string {
        return this._call.inputValues[1].value.toString()
    }

    get groupId(): BigInt {
        return this._call.inputValues[2].value.toBigInt()
    }

    get merkleTreeRoot(): BigInt {
        return this._call.inputValues[3].value.toBigInt()
    }

    get signal(): Bytes {
        return this._call.inputValues[4].value.toBytes()
    }

    get nullifierHash(): BigInt {
        return this._call.inputValues[5].value.toBigInt()
    }

    get externalNullifier(): BigInt {
        return this._call.inputValues[6].value.toBigInt()
    }

    get proof(): Array<BigInt> {
        return this._call.inputValues[7].value.toBigIntArray()
    }
}

export class SafeMintCall__Outputs {
    _call: SafeMintCall

    constructor(call: SafeMintCall) {
        this._call = call
    }

    get value0(): BigInt {
        return this._call.outputValues[0].value.toBigInt()
    }
}

export class SafeTransferFromCall extends ethereum.Call {
    get inputs(): SafeTransferFromCall__Inputs {
        return new SafeTransferFromCall__Inputs(this)
    }

    get outputs(): SafeTransferFromCall__Outputs {
        return new SafeTransferFromCall__Outputs(this)
    }
}

export class SafeTransferFromCall__Inputs {
    _call: SafeTransferFromCall

    constructor(call: SafeTransferFromCall) {
        this._call = call
    }

    get from(): Address {
        return this._call.inputValues[0].value.toAddress()
    }

    get to(): Address {
        return this._call.inputValues[1].value.toAddress()
    }

    get tokenId(): BigInt {
        return this._call.inputValues[2].value.toBigInt()
    }
}

export class SafeTransferFromCall__Outputs {
    _call: SafeTransferFromCall

    constructor(call: SafeTransferFromCall) {
        this._call = call
    }
}

export class SafeTransferFrom1Call extends ethereum.Call {
    get inputs(): SafeTransferFrom1Call__Inputs {
        return new SafeTransferFrom1Call__Inputs(this)
    }

    get outputs(): SafeTransferFrom1Call__Outputs {
        return new SafeTransferFrom1Call__Outputs(this)
    }
}

export class SafeTransferFrom1Call__Inputs {
    _call: SafeTransferFrom1Call

    constructor(call: SafeTransferFrom1Call) {
        this._call = call
    }

    get from(): Address {
        return this._call.inputValues[0].value.toAddress()
    }

    get to(): Address {
        return this._call.inputValues[1].value.toAddress()
    }

    get tokenId(): BigInt {
        return this._call.inputValues[2].value.toBigInt()
    }

    get _data(): Bytes {
        return this._call.inputValues[3].value.toBytes()
    }
}

export class SafeTransferFrom1Call__Outputs {
    _call: SafeTransferFrom1Call

    constructor(call: SafeTransferFrom1Call) {
        this._call = call
    }
}

export class SetApprovalForAllCall extends ethereum.Call {
    get inputs(): SetApprovalForAllCall__Inputs {
        return new SetApprovalForAllCall__Inputs(this)
    }

    get outputs(): SetApprovalForAllCall__Outputs {
        return new SetApprovalForAllCall__Outputs(this)
    }
}

export class SetApprovalForAllCall__Inputs {
    _call: SetApprovalForAllCall

    constructor(call: SetApprovalForAllCall) {
        this._call = call
    }

    get operator(): Address {
        return this._call.inputValues[0].value.toAddress()
    }

    get approved(): boolean {
        return this._call.inputValues[1].value.toBoolean()
    }
}

export class SetApprovalForAllCall__Outputs {
    _call: SetApprovalForAllCall

    constructor(call: SetApprovalForAllCall) {
        this._call = call
    }
}

export class StartMintingCall extends ethereum.Call {
    get inputs(): StartMintingCall__Inputs {
        return new StartMintingCall__Inputs(this)
    }

    get outputs(): StartMintingCall__Outputs {
        return new StartMintingCall__Outputs(this)
    }
}

export class StartMintingCall__Inputs {
    _call: StartMintingCall

    constructor(call: StartMintingCall) {
        this._call = call
    }
}

export class StartMintingCall__Outputs {
    _call: StartMintingCall

    constructor(call: StartMintingCall) {
        this._call = call
    }
}

export class StartVotingCall extends ethereum.Call {
    get inputs(): StartVotingCall__Inputs {
        return new StartVotingCall__Inputs(this)
    }

    get outputs(): StartVotingCall__Outputs {
        return new StartVotingCall__Outputs(this)
    }
}

export class StartVotingCall__Inputs {
    _call: StartVotingCall

    constructor(call: StartVotingCall) {
        this._call = call
    }
}

export class StartVotingCall__Outputs {
    _call: StartVotingCall

    constructor(call: StartVotingCall) {
        this._call = call
    }
}

export class StopMintingCall extends ethereum.Call {
    get inputs(): StopMintingCall__Inputs {
        return new StopMintingCall__Inputs(this)
    }

    get outputs(): StopMintingCall__Outputs {
        return new StopMintingCall__Outputs(this)
    }
}

export class StopMintingCall__Inputs {
    _call: StopMintingCall

    constructor(call: StopMintingCall) {
        this._call = call
    }
}

export class StopMintingCall__Outputs {
    _call: StopMintingCall

    constructor(call: StopMintingCall) {
        this._call = call
    }
}

export class StopVotingCall extends ethereum.Call {
    get inputs(): StopVotingCall__Inputs {
        return new StopVotingCall__Inputs(this)
    }

    get outputs(): StopVotingCall__Outputs {
        return new StopVotingCall__Outputs(this)
    }
}

export class StopVotingCall__Inputs {
    _call: StopVotingCall

    constructor(call: StopVotingCall) {
        this._call = call
    }
}

export class StopVotingCall__Outputs {
    _call: StopVotingCall

    constructor(call: StopVotingCall) {
        this._call = call
    }
}

export class TransferFromCall extends ethereum.Call {
    get inputs(): TransferFromCall__Inputs {
        return new TransferFromCall__Inputs(this)
    }

    get outputs(): TransferFromCall__Outputs {
        return new TransferFromCall__Outputs(this)
    }
}

export class TransferFromCall__Inputs {
    _call: TransferFromCall

    constructor(call: TransferFromCall) {
        this._call = call
    }

    get from(): Address {
        return this._call.inputValues[0].value.toAddress()
    }

    get to(): Address {
        return this._call.inputValues[1].value.toAddress()
    }

    get tokenId(): BigInt {
        return this._call.inputValues[2].value.toBigInt()
    }
}

export class TransferFromCall__Outputs {
    _call: TransferFromCall

    constructor(call: TransferFromCall) {
        this._call = call
    }
}

export class VoteCall extends ethereum.Call {
    get inputs(): VoteCall__Inputs {
        return new VoteCall__Inputs(this)
    }

    get outputs(): VoteCall__Outputs {
        return new VoteCall__Outputs(this)
    }
}

export class VoteCall__Inputs {
    _call: VoteCall

    constructor(call: VoteCall) {
        this._call = call
    }

    get tokenId(): BigInt {
        return this._call.inputValues[0].value.toBigInt()
    }

    get groupId(): BigInt {
        return this._call.inputValues[1].value.toBigInt()
    }

    get merkleTreeRoot(): BigInt {
        return this._call.inputValues[2].value.toBigInt()
    }

    get signal(): Bytes {
        return this._call.inputValues[3].value.toBytes()
    }

    get nullifierHash(): BigInt {
        return this._call.inputValues[4].value.toBigInt()
    }

    get proof(): Array<BigInt> {
        return this._call.inputValues[5].value.toBigIntArray()
    }
}

export class VoteCall__Outputs {
    _call: VoteCall

    constructor(call: VoteCall) {
        this._call = call
    }
}