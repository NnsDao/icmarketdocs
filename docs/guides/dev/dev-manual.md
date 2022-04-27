---
sidebar_position: 1
---

# ICMarket Developer Manual

This document shows the minimum interface for ICMarket access

Each interface can be implemented in two ways. Starting with ‘m’ means that it supports both ICP and NDP transactions

## NFT display

### sale list

shows a list of NFTs being sold, the return value includes NFT token index, price and seller.

```rust
public type ListingsResponse = [(
    Ext.TokenIndex,
    ExtListing,
    Metadata,
)];

public type ExtListing = {
    locked      : ?Time.Time;
    price       : Price;  // ICPe8
    seller      : Principal;
};

public type Price = {
    #ICP : Nat64;
    #NDP : Nat64;
};

public type Metadata = {
    #fungible : {
        decimals    : Nat8;
        metadata    : ?Blob;
        name        : Text;
        symbol      : Text;
    };
    #nonfungible : {
        metadata : ?Blob;
    };
};

public query func mListings () : async ListingsResponse
```

```rust
public type ListingsResponse = [(
    Ext.TokenIndex,
    ExtListing,
    Metadata,
)];

public type ExtListing = {
    locked      : ?Time.Time;
    price       : Nat64;  // ICPe8
    seller      : Principal;
};

public type Metadata = {
    #fungible : {
        decimals    : Nat8;
        metadata    : ?Blob;
        name        : Text;
        symbol      : Text;
    };
    #nonfungible : {
        metadata : ?Blob;
    };
};

public query func listings () : async ListingsResponse
```

### someone’s tokens

Display someone’s tokens and the sale information of each tokens

```rust
public type Listing = {
    locked      : ?Time.Time;
    price       : Price;  // ICPe8
    seller      : Principal;
    subaccount  : ?Ext.SubAccount;
};

public type Price = {
    #ICP : Nat64;
    #NDP : Nat64;
};

public query ({ caller }) func mTokensExt(
    accountId : EXT.AccountIdentifier
) : async Result.Result<[(EXT.TokenIndex, ?Listing, ?[Nat8])], EXT.CommonError>
```

```rust
public type Listing = {
    locked      : ?Time.Time;
    price       : Nat64;  // ICPe8
    seller      : Principal;
    subaccount  : ?Ext.SubAccount;
};

public query ({ caller }) func tokens_ext(
    accountId : EXT.AccountIdentifier
) : async Result.Result<[(EXT.TokenIndex, ?Listing, ?[Nat8])], EXT.CommonError>
```

### sale information

```rust
public type StatsResponse = (
    Stats, // ICP
    Stats, // NDP
);

public type Stats = (
    Nat64,  // Total Volume
    Nat64,  // Highest Price Sale
    Nat64,  // Lowest Price Sale
    Nat64,  // Current Floor Price
    Nat,    // # Listings
    Nat,    // # Supply
    Nat,    // # Sales
);

public query func mStats () : async (
    StatsResponse
)
```

```rust
public query func stats () : async (
    Nat64,  // Total Volume
    Nat64,  // Highest Price Sale
    Nat64,  // Lowest Price Sale
    Nat64,  // Current Floor Price
    Nat,    // # Listings
    Nat,    // # Supply
    Nat,    // #Sales
)
```

## Sale

When you sell an NFT. When price is null, it means delist.

```rust
public type ListRequest = {
    from_subaccount  : ?Ext.SubAccount;
    price            : ?Price;  // ICPe8
    token            : Ext.TokenIdentifier;
};

public type Price = {
    #ICP : Nat64;
    #NDP : Nat64;
};

public shared ({ caller }) func mList (
   request : ListRequest,
) : async ListResponse
```

```rust
public type ListRequest = {
    from_subaccount  : ?Ext.SubAccount;
    price            : ?Nat64;  // ICPe8
    token            : Ext.TokenIdentifier;
};

public shared ({ caller }) func list (
    request : ListRequest,
) : async ListResponse
```

## Buy

The process of purchasing NFT

### 1. lock

The owner and price need to be verified on the lock process. Lock should return a sub account

```rust
public type Price = {
    #ICP : Nat64;
    #NDP : Nat64;
};

public type LockResponse = Result.Result<Ext.AccountIdentifier, Ext.CommonError>;

public shared ({ caller }) func mLock (
    token : EXT.TokenIdentifier,
    price : Price,
    buyer : EXT.AccountIdentifier,
    bytes : [Nat8],
) : async LockResponse
```

```rust
public type LockResponse = Result.Result<Ext.AccountIdentifier, Ext.CommonError>;

public shared ({ caller }) func lock (
    token : EXT.TokenIdentifier,
    price : Nat64,
    buyer : EXT.AccountIdentifier,
    bytes : [Nat8],
) : async LockResponse
```

### 2. transfer icp/ndp

The canister does not need to be concerned. ICMarket will transfer the ICP / NDP held by the user to the sub account returned by previous step

### 3. settle

In this step, you need to confirm whether the balance in the sub account is consistent with the selling price from the ledger of ICP or NDP

If everything is correct, you need to transfer the ownership of this NFT, and transfer the balance of the sub account to the seller, ICMarket and other accounts in proportion

When ICP/NDP transfer is completed, settle will be called by ICMarket. Of course, you can also execute the setting in hearbeart

```rust
public shared func mSettle (
    token : EXT.TokenIdentifier,
) : async Result.Result<(), EXT.CommonError>
```

```rust
public shared func settle (
    token : EXT.TokenIdentifier,
) : async Result.Result<(), EXT.CommonError>
```

FYI

**the ICMarket account:**

```javascript
6b09eb5e758034e5e0f8fb507cfcba68479183b371fffaff08940c8edf514dcf
```

**the NDP ledger canister:**

```javascript
vgqnj - miaaa - aaaal - qaapa - cai;
```
