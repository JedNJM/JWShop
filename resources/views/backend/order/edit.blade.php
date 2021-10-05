@extends('backend.layouts.master')

@section('title','Order Detail')

@section('main-content')
<div class="card">
  <h5 class="card-header">Commande Modifier</h5>
  <div class="card-body">
    <form action="{{route('order.update',$order->id)}}" method="POST">
      @csrf
      @method('PATCH')
      <div class="form-group">
        <label for="status">Statut :</label>
        <select name="status" id="" class="form-control">
          <option value="">--Choisir Statut--</option>
          <option value="Nouveau" {{(($order->status=='new')? 'selected' : '')}}>Nouveau</option>
          <option value="cours de livraison" {{(($order->status=='process')? 'selected' : '')}}>en cours de livraison</option>
          <option value="Livrer" {{(($order->status=='delivered')? 'selected' : '')}}>Livré</option>
          <option value="Annuler" {{(($order->status=='cancel')? 'selected' : '')}}>Annuler</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Mettre à jour</button>
    </form>
  </div>
</div>
@endsection

@push('styles')
<style>
    .order-info,.shipping-info{
        background:#ECECEC;
        padding:20px;
    }
    .order-info h4,.shipping-info h4{
        text-decoration: underline;
    }

</style>
@endpush
