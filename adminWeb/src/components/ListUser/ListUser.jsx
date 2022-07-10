import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classNames from 'classnames';
import "./ListUser.scss";
import { Modal } from "antd";
import { del, get } from "../../utils/api";

export const defaultValue = {

}

function ListUser() {

  return (
   
          <main id="content" role="main" className="main">
            {/* Content */}
            <div className="content container-fluid">
              {/* Page Header */}
              <div className="page-header">
                <div className="row align-items-center mb-3">
                  <div className="col-sm mb-2 mb-sm-0">
                    <h1 className="page-header-title">Khách hàng <span className="badge badge-soft-dark ml-2">97,524</span></h1>
                    <div className="mt-2">
                      {/* <a class="text-body mr-3" href="javascript:;" data-toggle="modal" data-target="#importCustomersModal">
                    <i class="tio-publish mr-1"></i> Import customers
                  </a>
                  <a class="text-body mr-3" href="javascript:;" data-toggle="modal" data-target="#exportCustomersModal">
                    <i class="tio-download-to mr-1"></i> Export
                  </a> */}
                      {/* Unfold */}
                      {/* <div class="hs-unfold">
                    <a class="js-hs-unfold-invoker text-body" href="javascript:;" data-hs-unfold-options='{
                           "target": "#moreOptionsDropdown",
                           "type": "css-animation"
                         }'>
                      More options <i class="tio-chevron-down"></i>
                    </a>
    
                    <div id="moreOptionsDropdown" class="hs-unfold-content dropdown-unfold dropdown-menu mt-1">
                      <a class="dropdown-item" href="#">
                        <i class="tio-copy dropdown-item-icon"></i> Manage duplicates
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="tio-edit dropdown-item-icon"></i> Edit users
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="tio-restore dropdown-item-icon"></i> Restore clients
                      </a>
                    </div>
                  </div> */}
                      {/* End Unfold */}
                    </div>
                  </div>
                  {/* <div class="col-sm-auto">
                <a class="btn btn-primary" href="ecommerce-add-customers.html">Thêm khách hàng</a>
              </div> */}
                </div>
                {/* End Row */}
                {/* Nav Scroller */}
                <div className="js-nav-scroller hs-nav-scroller-horizontal">
                  <span className="hs-nav-scroller-arrow-prev" style={{display: 'none'}}>
                    <a className="hs-nav-scroller-arrow-link" href="javascript:;">
                      <i className="tio-chevron-left" />
                    </a>
                  </span>
                  <span className="hs-nav-scroller-arrow-next" style={{display: 'none'}}>
                    <a className="hs-nav-scroller-arrow-link" href="javascript:;">
                      <i className="tio-chevron-right" />
                    </a>
                  </span>
                  {/* Nav */}
                  <ul className="nav nav-tabs page-header-tabs">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">Tất cả khách hàng</a>
                    </li>
                    {/* <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Mới</a>
                </li> */}
                    {/* <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Returning</a>
                </li> */}
                    {/* <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Abandoned checkouts</a>
                </li> */}
                    {/* <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Email subscribers</a>
                </li> */}
                  </ul>
                  {/* End Nav */}
                </div>
                {/* End Nav Scroller */}
              </div>
              {/* End Page Header */}
              {/* Card */}
              <div className="card">
                {/* Body */}
                <div className="card-body">
                  <div className="row justify-content-between align-items-center flex-grow-1">
                    <div className="col-lg-6 mb-3 mb-lg-0">
                      <form>
                        {/* Search */}
                        <div className="input-group input-group-merge input-group-flush">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="tio-search" />
                            </div>
                          </div>
                          <input id="datatableSearch" type="search" className="form-control" placeholder="Tìm khách hàng" aria-label="Search customer" />
                        </div>
                        {/* End Search */}
                      </form>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-sm-flex justify-content-sm-end align-items-sm-center">
                        {/* Datatable Info */}
                        <div id="datatableCounterInfo" className="mr-2 mb-2 mb-sm-0" style={{display: 'none'}}>
                          <div className="d-flex align-items-center">
                            <span className="font-size-sm mr-3">
                              Đã chọn
                              <span id="datatableCounter">0</span>
                              khách hàng
                            </span>
                            <a className="btn btn-sm btn-outline-danger" href="javascript:;">
                              <i className="tio-delete-outlined" /> Xóa
                            </a>
                          </div>
                        </div>
                        {/* End Datatable Info */}
                        {/* Export Products */}
                        <div className="hs-unfold mr-2">
                          <a className="js-hs-unfold-invoker btn btn-sm btn-white dropdown-toggle" href="javascript:;" data-hs-unfold-options="{
                            &quot;target&quot;: &quot;#usersExportDropdown&quot;,
                            &quot;type&quot;: &quot;css-animation&quot;
                          }">
                            <i className="tio-download-to mr-1" /> Export
                          </a>
                          <div id="usersExportDropdown" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-sm-right">
                            <span className="dropdown-header">Options</span>
                            <a id="export-copy" className="dropdown-item" href="javascript:;">
                              <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\copy.svg" alt="Image Description" />
                              Copy
                            </a>
                            <a id="export-print" className="dropdown-item" href="javascript:;">
                              <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\print.svg" alt="Image Description" />
                              Print
                            </a>
                            <div className="dropdown-divider" />
                            <span className="dropdown-header">Download options</span>
                            <a id="export-excel" className="dropdown-item" href="javascript:;">
                              <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\excel.svg" alt="Image Description" />
                              Excel
                            </a>
                            <a id="export-csv" className="dropdown-item" href="javascript:;">
                              <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\components\placeholder-csv-format.svg" alt="Image Description" />
                              .CSV
                            </a>
                            <a id="export-pdf" className="dropdown-item" href="javascript:;">
                              <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\pdf.svg" alt="Image Description" />
                              PDF
                            </a>
                          </div>
                        </div>
                        {/* Export Products */}
                        {/* Unfold */}
                        <div className="hs-unfold">
                          <a className="js-hs-unfold-invoker btn btn-white" href="javascript:;" data-hs-unfold-options="{
                             &quot;target&quot;: &quot;#showHideDropdown&quot;,
                             &quot;type&quot;: &quot;css-animation&quot;
                           }">
                            <i className="tio-table mr-1" /> Số cột <span className="badge badge-soft-dark rounded-circle ml-1">5</span>
                          </a>
                          <div id="showHideDropdown" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right dropdown-card" style={{width: '15rem'}}>
                            <div className="card card-sm">
                              <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                  <span className="mr-2">Tên</span>
                                  {/* Checkbox Switch */}
                                  <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_name">
                                    <input type="checkbox" className="toggle-switch-input" id="toggleColumn_name" defaultChecked />
                                    <span className="toggle-switch-label">
                                      <span className="toggle-switch-indicator" />
                                    </span>
                                  </label>
                                  {/* End Checkbox Switch */}
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                  <span className="mr-2">E-mail</span>
                                  {/* Checkbox Switch */}
                                  <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_email">
                                    <input type="checkbox" className="toggle-switch-input" id="toggleColumn_email" defaultChecked />
                                    <span className="toggle-switch-label">
                                      <span className="toggle-switch-indicator" />
                                    </span>
                                  </label>
                                  {/* End Checkbox Switch */}
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                  <span className="mr-2">Số điện thoại</span>
                                  {/* Checkbox Switch */}
                                  <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_phone">
                                    <input type="checkbox" className="toggle-switch-input" id="toggleColumn_phone" />
                                    <span className="toggle-switch-label">
                                      <span className="toggle-switch-indicator" />
                                    </span>
                                  </label>
                                  {/* End Checkbox Switch */}
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                  <span className="mr-2">Địa chỉ</span>
                                  {/* Checkbox Switch */}
                                  <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_address">
                                    <input type="checkbox" className="toggle-switch-input" id="toggleColumn_address" defaultChecked />
                                    <span className="toggle-switch-label">
                                      <span className="toggle-switch-indicator" />
                                    </span>
                                  </label>
                                  {/* End Checkbox Switch */}
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                  <span className="mr-2">Trạng thái</span>
                                  {/* Checkbox Switch */}
                                  <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_account_status">
                                    <input type="checkbox" className="toggle-switch-input" id="toggleColumn_account_status" />
                                    <span className="toggle-switch-label">
                                      <span className="toggle-switch-indicator" />
                                    </span>
                                  </label>
                                  {/* End Checkbox Switch */}
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                  <span className="mr-2">Số đơn hàng</span>
                                  {/* Checkbox Switch */}
                                  <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_orders">
                                    <input type="checkbox" className="toggle-switch-input" id="toggleColumn_orders" defaultChecked />
                                    <span className="toggle-switch-label">
                                      <span className="toggle-switch-indicator" />
                                    </span>
                                  </label>
                                  {/* End Checkbox Switch */}
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                  <span className="mr-2">Số tiền đã chi</span>
                                  {/* Checkbox Switch */}
                                  <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_total_spent">
                                    <input type="checkbox" className="toggle-switch-input" id="toggleColumn_total_spent" defaultChecked />
                                    <span className="toggle-switch-label">
                                      <span className="toggle-switch-indicator" />
                                    </span>
                                  </label>
                                  {/* End Checkbox Switch */}
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                  <span className="mr-2">Ngày tạo</span>
                                  {/* Checkbox Switch */}
                                  <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_date_created">
                                    <input type="checkbox" className="toggle-switch-input" id="toggleColumn_date_created" />
                                    <span className="toggle-switch-label">
                                      <span className="toggle-switch-indicator" />
                                    </span>
                                  </label>
                                  {/* End Checkbox Switch */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Unfold */}
                      </div>
                    </div>
                  </div>
                  {/* End Row */}
                </div>
                {/* End Body */}
                {/* Table */}
                <div className="table-responsive datatable-custom">
                  <table id="datatable" className="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle card-table" data-hs-datatables-options="{
                         &quot;columnDefs&quot;: [{
                            &quot;targets&quot;: [0],
                            &quot;orderable&quot;: false
                          }],
                         &quot;order&quot;: [],
                         &quot;info&quot;: {
                           &quot;totalQty&quot;: &quot;#datatableWithPaginationInfoTotalQty&quot;
                         },
                         &quot;search&quot;: &quot;#datatableSearch&quot;,
                         &quot;entries&quot;: &quot;#datatableEntries&quot;,
                         &quot;pageLength&quot;: 15,
                         &quot;isResponsive&quot;: false,
                         &quot;isShowPaging&quot;: false,
                         &quot;pagination&quot;: &quot;datatablePagination&quot;
                       }">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col" className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input id="datatableCheckAll" type="checkbox" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="datatableCheckAll" />
                          </div>
                        </th>
                        <th className="table-column-pl-0">Tên</th>
                        <th>E-mail</th>
                        <th>Số điện thoại</th>
                        <th>Địa chỉ</th>
                        <th>Trạng thái</th>
                        <th>Số đơn hàng</th>
                        <th>Số tiền đã chi</th>
                        <th>Ngày tạo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="usersDataCheck1" />
                            <label className="custom-control-label" htmlFor="usersDataCheck1" />
                          </div>
                        </td>
                        <td className="table-column-pl-0">
                          <a className="d-flex align-items-center" href="ecommerce-customer-details.html">
                            <div className="avatar avatar-circle">
                              <img className="avatar-img" src="assets\img\160x160\img10.jpg" alt="Image Description" />
                            </div>
                            <div className="ml-3">
                              <span className="h5 text-hover-primary">Amanda Harvey <i className="tio-verified text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed" /></span>
                            </div>
                          </a>
                        </td>
                        <td>amanda@example.com</td>
                        <td>+1-202-555-0140</td>
                        <td>United Kingdom <span className="text-hide">Code: GB</span></td>
                        <td>
                          <span className="legend-indicator bg-success" />Active
                        </td>
                        <td>3</td>
                        <td>$3,511.01</td>
                        <td>Aug 17, 2020, 5:48 (ET)</td>
                      </tr>
                      <tr>
                        <td className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="usersDataCheck2" />
                            <label className="custom-control-label" htmlFor="usersDataCheck2" />
                          </div>
                        </td>
                        <td className="table-column-pl-0">
                          <a className="d-flex align-items-center" href="ecommerce-customer-details.html">
                            <div className="avatar avatar-soft-primary avatar-circle">
                              <span className="avatar-initials">A</span>
                            </div>
                            <div className="ml-3">
                              <span className="h5 text-hover-primary">Anne Richard</span>
                            </div>
                          </a>
                        </td>
                        <td>anne@example.com</td>
                        <td>+1-752-235-2353</td>
                        <td>United States <span className="text-hide">Code: US</span></td>
                        <td>
                          <span className="legend-indicator bg-danger" />Disabled
                        </td>
                        <td>1</td>
                        <td>$235.00</td>
                        <td>Aug 17, 2020, 2:01 (ET)</td>
                      </tr>
                      <tr>
                        <td className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="usersDataCheck3" />
                            <label className="custom-control-label" htmlFor="usersDataCheck3" />
                          </div>
                        </td>
                        <td className="table-column-pl-0">
                          <a className="d-flex align-items-center" href="ecommerce-customer-details.html">
                            <div className="avatar avatar-circle">
                              <img className="avatar-img" src="assets\img\160x160\img3.jpg" alt="Image Description" />
                            </div>
                            <div className="ml-3">
                              <span className="h5 text-hover-primary">David Harrison</span>
                            </div>
                          </a>
                        </td>
                        <td>david@example.com</td>
                        <td>+1-235-364-2611</td>
                        <td>United States <span className="text-hide">Code: US</span></td>
                        <td>
                          <span className="legend-indicator bg-success" />Active
                        </td>
                        <td>53 <span className="badge badge-soft-dark ml-1">+3 today</span></td>
                        <td>$346,410.12</td>
                        <td>Aug 17, 2020, 1:55 (ET)</td>
                      </tr>
                      <tr>
                        <td className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="usersDataCheck4" />
                            <label className="custom-control-label" htmlFor="usersDataCheck4" />
                          </div>
                        </td>
                        <td className="table-column-pl-0">
                          <a className="d-flex align-items-center" href="ecommerce-customer-details.html">
                            <div className="avatar avatar-circle">
                              <img className="avatar-img" src="assets\img\160x160\img5.jpg" alt="Image Description" />
                            </div>
                            <div className="ml-3">
                              <span className="h5 text-hover-primary">Finch Hoot</span>
                            </div>
                          </a>
                        </td>
                        <td>finch@example.com</td>
                        <td>+1-743-632-9574</td>
                        <td>Argentina <span className="text-hide">Code: AR</span></td>
                        <td>
                          <span className="legend-indicator bg-danger" />Disabled
                        </td>
                        <td>12 <span className="badge badge-soft-dark ml-1">+1 today</span></td>
                        <td>$1,350.04</td>
                        <td>Aug 17, 2020, 1:54 (ET)</td>
                      </tr>
                      <tr>
                        <td className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="usersDataCheck5" />
                            <label className="custom-control-label" htmlFor="usersDataCheck5" />
                          </div>
                        </td>
                        <td className="table-column-pl-0">
                          <a className="d-flex align-items-center" href="ecommerce-customer-details.html">
                            <div className="avatar avatar-soft-dark avatar-circle">
                              <span className="avatar-initials">B</span>
                            </div>
                            <div className="ml-3">
                              <span className="h5 text-hover-primary">Bob Dean</span>
                            </div>
                          </a>
                        </td>
                        <td>bob@example.com</td>
                        <td>+1-854-235-9755</td>
                        <td>Austria <span className="text-hide">Code: AT</span></td>
                        <td>
                          <span className="legend-indicator bg-danger" />Disabled
                        </td>
                        <td>8</td>
                        <td>$912.13</td>
                        <td>Aug 17, 2020, 1:04 (ET)</td>
                      </tr>
                      <tr>
                        <td className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="usersDataCheck6" />
                            <label className="custom-control-label" htmlFor="usersDataCheck6" />
                          </div>
                        </td>
                        <td className="table-column-pl-0">
                          <a className="d-flex align-items-center" href="ecommerce-customer-details.html">
                            <div className="avatar avatar-circle">
                              <img className="avatar-img" src="assets\img\160x160\img9.jpg" alt="Image Description" />
                            </div>
                            <div className="ml-3">
                              <span className="h5 text-hover-primary">Ella Lauda <i className="tio-verified text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed" /></span>
                            </div>
                          </a>
                        </td>
                        <td>ella@example.com</td>
                        <td>+1-846-157-2423</td>
                        <td>United Kingdom <span className="text-hide">Code: GB</span></td>
                        <td>
                          <span className="legend-indicator bg-success" />Active
                        </td>
                        <td>5</td>
                        <td>$451.66</td>
                        <td>Aug 17, 2020, 1:01 (ET)</td>
                      </tr>
                      <tr>
                        <td className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="usersDataCheck7" />
                            <label className="custom-control-label" htmlFor="usersDataCheck7" />
                          </div>
                        </td>
                        <td className="table-column-pl-0">
                          <a className="d-flex align-items-center" href="ecommerce-customer-details.html">
                            <div className="avatar avatar-soft-info avatar-circle">
                              <span className="avatar-initials">L</span>
                            </div>
                            <div className="ml-3">
                              <span className="h5 text-hover-primary">Lori Hunter</span>
                            </div>
                          </a>
                        </td>
                        <td>hunter@example.com</td>
                        <td>+1-844-235-4378</td>
                        <td>Estonia <span className="text-hide">Code: EE</span></td>
                        <td>
                          <span className="legend-indicator bg-success" />Active
                        </td>
                        <td>11 <span className="badge badge-soft-dark ml-1">+4 today</span></td>
                        <td>$3,582.46</td>
                        <td>Aug 17, 2020, 12:56 (ET)</td>
                      </tr>
                      <tr>
                        <td className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="usersDataCheck16" />
                            <label className="custom-control-label" htmlFor="usersDataCheck16" />
                          </div>
                        </td>
                        <td className="table-column-pl-0">
                          <a className="d-flex align-items-center" href="ecommerce-customer-details.html">
                            <div className="avatar avatar-soft-primary avatar-circle">
                              <span className="avatar-initials">M</span>
                            </div>
                            <div className="ml-3">
                              <span className="h5 text-hover-primary">Mark Colbert</span>
                            </div>
                          </a>
                        </td>
                        <td>mark@example.com</td>
                        <td>+1-235-235-7482</td>
                        <td>Canada <span className="text-hide">Code: CA</span></td>
                        <td>
                          <span className="legend-indicator bg-success" />Active
                        </td>
                        <td>4</td>
                        <td>$481.00</td>
                        <td>Aug 17, 2020, 12:54 (ET)</td>
                      </tr>
                      <tr>
                        <td className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="usersDataCheck9" />
                            <label className="custom-control-label" htmlFor="usersDataCheck9" />
                          </div>
                        </td>
                        <td className="table-column-pl-0">
                          <a className="d-flex align-items-center" href="ecommerce-customer-details.html">
                            <div className="avatar avatar-circle">
                              <img className="avatar-img" src="assets\img\160x160\img6.jpg" alt="Image Description" />
                            </div>
                            <div className="ml-3">
                              <span className="h5 text-hover-primary">Costa Quinn</span>
                            </div>
                          </a>
                        </td>
                        <td>costa@example.com</td>
                        <td>+1-543-346-6343</td>
                        <td>France <span className="text-hide">Code: FR</span></td>
                        <td>
                          <span className="legend-indicator bg-success" />Active
                        </td>
                        <td>9</td>
                        <td>$2,591.00</td>
                        <td>Aug 17, 2020, 12:48 (ET)</td>
                      </tr>
                      <tr>
                        <td className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="usersDataCheck10" />
                            <label className="custom-control-label" htmlFor="usersDataCheck10" />
                          </div>
                        </td>
                        <td className="table-column-pl-0">
                          <a className="d-flex align-items-center" href="ecommerce-customer-details.html">
                            <div className="avatar avatar-soft-danger avatar-circle">
                              <span className="avatar-initials">R</span>
                            </div>
                            <div className="ml-3">
                              <span className="h5 text-hover-primary">Rachel Doe <i className="tio-verified text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed" /></span>
                            </div>
                          </a>
                        </td>
                        <td>rachel@example.com</td>
                        <td>+1-232-643-3643</td>
                        <td>United States <span className="text-hide">Code: US</span></td>
                        <td>
                          <span className="legend-indicator bg-success" />Active
                        </td>
                        <td>21</td>
                        <td>$5,219.18</td>
                        <td>Aug 17, 2020, 12:41 (ET)</td>
                      </tr>
                      <tr>
                        <td className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="usersDataCheck11" />
                            <label className="custom-control-label" htmlFor="usersDataCheck11" />
                          </div>
                        </td>
                        <td className="table-column-pl-0">
                          <a className="d-flex align-items-center" href="ecommerce-customer-details.html">
                            <div className="avatar avatar-circle">
                              <img className="avatar-img" src="assets\img\160x160\img8.jpg" alt="Image Description" />
                            </div>
                            <div className="ml-3">
                              <span className="h5 text-hover-primary">Linda Bates</span>
                            </div>
                          </a>
                        </td>
                        <td>linda@example.com</td>
                        <td>+1-123-523-5433</td>
                        <td>United Kingdom <span className="text-hide">Code: UK</span></td>
                        <td>
                          <span className="legend-indicator bg-danger" />Disabled
                        </td>
                        <td>32 <span className="badge badge-soft-dark ml-1">+1 today</span></td>
                        <td>$8,281.99</td>
                        <td>Aug 17, 2020, 12:36 (ET)</td>
                      </tr>
                      <tr>
                        <td className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="usersDataCheck12" />
                            <label className="custom-control-label" htmlFor="usersDataCheck12" />
                          </div>
                        </td>
                        <td className="table-column-pl-0">
                          <a className="d-flex align-items-center" href="ecommerce-customer-details.html">
                            <div className="avatar avatar-soft-info avatar-circle">
                              <span className="avatar-initials">B</span>
                            </div>
                            <div className="ml-3">
                              <span className="h5 text-hover-primary">Brian Halligan</span>
                            </div>
                          </a>
                        </td>
                        <td>brian@example.com</td>
                        <td>+1-141-463-1512</td>
                        <td>France <span className="text-hide">Code: FR</span></td>
                        <td>
                          <span className="legend-indicator bg-success" />Active
                        </td>
                        <td>1</td>
                        <td>$100.00</td>
                        <td>Aug 17, 2020, 12:25 (ET)</td>
                      </tr>
                      <tr>
                        <td className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="usersDataCheck13" />
                            <label className="custom-control-label" htmlFor="usersDataCheck13" />
                          </div>
                        </td>
                        <td className="table-column-pl-0">
                          <a className="d-flex align-items-center" href="ecommerce-customer-details.html">
                            <div className="avatar avatar-soft-dark avatar-circle">
                              <span className="avatar-initials">C</span>
                            </div>
                            <div className="ml-3">
                              <span className="h5 text-hover-primary">Chris Mathew</span>
                            </div>
                          </a>
                        </td>
                        <td>chris@example.com</td>
                        <td>+1-253-463-1242</td>
                        <td>Switzerland <span className="text-hide">Code: CH</span></td>
                        <td>
                          <span className="legend-indicator bg-success" />Active
                        </td>
                        <td>1</td>
                        <td>$26.00</td>
                        <td>Aug 16, 2020, 4:31 (ET)</td>
                      </tr>
                      <tr>
                        <td className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="usersDataCheck14" />
                            <label className="custom-control-label" htmlFor="usersDataCheck14" />
                          </div>
                        </td>
                        <td className="table-column-pl-0">
                          <a className="d-flex align-items-center" href="ecommerce-customer-details.html">
                            <div className="avatar avatar-circle">
                              <img className="avatar-img" src="assets\img\160x160\img7.jpg" alt="Image Description" />
                            </div>
                            <div className="ml-3">
                              <span className="h5 text-hover-primary">Clarice Boone <i className="tio-verified text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed" /></span>
                            </div>
                          </a>
                        </td>
                        <td>clarice@example.com</td>
                        <td>+1-532-325-3253</td>
                        <td>United Kingdom <span className="text-hide">Code: UK</span></td>
                        <td>
                          <span className="legend-indicator bg-success" />Active
                        </td>
                        <td>2</td>
                        <td>$274.28</td>
                        <td>Aug 16, 2020, 3:26 (ET)</td>
                      </tr>
                      <tr>
                        <td className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="usersDataCheck15" />
                            <label className="custom-control-label" htmlFor="usersDataCheck15" />
                          </div>
                        </td>
                        <td className="table-column-pl-0">
                          <a className="d-flex align-items-center" href="ecommerce-customer-details.html">
                            <div className="avatar avatar-soft-dark avatar-circle">
                              <span className="avatar-initials">L</span>
                            </div>
                            <div className="ml-3">
                              <span className="h5 text-hover-primary">Lewis Clarke</span>
                            </div>
                          </a>
                        </td>
                        <td>lewis@example.com</td>
                        <td>+1-235-235-2355</td>
                        <td>Switzerland <span className="text-hide">Code: CH</span></td>
                        <td>
                          <span className="legend-indicator bg-danger" />Disabled
                        </td>
                        <td>4</td>
                        <td>$999.00</td>
                        <td>Aug 16, 2020, 2:54 (ET)</td>
                      </tr>
                      <tr>
                        <td className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="usersDataCheck8" />
                            <label className="custom-control-label" htmlFor="usersDataCheck8" />
                          </div>
                        </td>
                        <td className="table-column-pl-0">
                          <a className="d-flex align-items-center" href="ecommerce-customer-details.html">
                            <div className="avatar avatar-circle">
                              <img className="avatar-img" src="assets\img\160x160\img4.jpg" alt="Image Description" />
                            </div>
                            <div className="ml-3">
                              <span className="h5 text-hover-primary">Sam Kart</span>
                            </div>
                          </a>
                        </td>
                        <td>sam@example.com</td>
                        <td>+1-457-745-7555</td>
                        <td>Canada <span className="text-hide">Code: CA</span></td>
                        <td>
                          <span className="legend-indicator bg-success" />Active
                        </td>
                        <td>62 <span className="badge badge-soft-dark ml-1">+9 today</span></td>
                        <td>$9,281.58</td>
                        <td>Aug 16, 2020, 2:48 (ET)</td>
                      </tr>
                      <tr>
                        <td className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="usersDataCheck17" />
                            <label className="custom-control-label" htmlFor="usersDataCheck17" />
                          </div>
                        </td>
                        <td className="table-column-pl-0">
                          <a className="d-flex align-items-center" href="ecommerce-customer-details.html">
                            <div className="avatar avatar-soft-danger avatar-circle">
                              <span className="avatar-initials">J</span>
                            </div>
                            <div className="ml-3">
                              <span className="h5 text-hover-primary">Johnny Appleseed</span>
                            </div>
                          </a>
                        </td>
                        <td>johnny@example.com</td>
                        <td>+1-457-734-4544</td>
                        <td>United States <span className="text-hide">Code: US</span></td>
                        <td>
                          <span className="legend-indicator bg-success" />Active
                        </td>
                        <td>30</td>
                        <td>$23,291.37</td>
                        <td>Aug 16, 2020, 2:40 (ET)</td>
                      </tr>
                      <tr>
                        <td className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="usersDataCheck18" />
                            <label className="custom-control-label" htmlFor="usersDataCheck18" />
                          </div>
                        </td>
                        <td className="table-column-pl-0">
                          <a className="d-flex align-items-center" href="ecommerce-customer-details.html">
                            <div className="avatar avatar-soft-danger avatar-circle">
                              <span className="avatar-initials">P</span>
                            </div>
                            <div className="ml-3">
                              <span className="h5 text-hover-primary">Phileas Fogg</span>
                            </div>
                          </a>
                        </td>
                        <td>phileas@example.com</td>
                        <td>+1-065-084-8658</td>
                        <td>Spain <span className="text-hide">Code: ES</span></td>
                        <td>
                          <span className="legend-indicator bg-danger" />Disabled
                        </td>
                        <td>10</td>
                        <td>$82.39</td>
                        <td>Aug 16, 2020, 1:59 (ET)</td>
                      </tr>
                      <tr>
                        <td className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="usersDataCheck19" />
                            <label className="custom-control-label" htmlFor="usersDataCheck19" />
                          </div>
                        </td>
                        <td className="table-column-pl-0">
                          <a className="d-flex align-items-center" href="ecommerce-customer-details.html">
                            <div className="avatar avatar-circle">
                              <img className="avatar-img" src="assets\img\160x160\img6.jpg" alt="Image Description" />
                            </div>
                            <div className="ml-3">
                              <span className="h5 text-hover-primary">Mark Williams <i className="tio-verified text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed" /></span>
                            </div>
                          </a>
                        </td>
                        <td>mark@example.com</td>
                        <td>+1-340-055-4733</td>
                        <td>United Kingdom <span className="text-hide">Code: GB</span></td>
                        <td>
                          <span className="legend-indicator bg-danger" />Disabled
                        </td>
                        <td>7</td>
                        <td>$343.93</td>
                        <td>Aug 16, 2020, 1:55 (ET)</td>
                      </tr>
                      <tr>
                        <td className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="usersDataCheck20" />
                            <label className="custom-control-label" htmlFor="usersDataCheck20" />
                          </div>
                        </td>
                        <td className="table-column-pl-0">
                          <a className="d-flex align-items-center" href="ecommerce-customer-details.html">
                            <div className="avatar avatar-soft-dark avatar-circle">
                              <span className="avatar-initials">T</span>
                            </div>
                            <div className="ml-3">
                              <span className="h5 text-hover-primary">Timothy Silva</span>
                            </div>
                          </a>
                        </td>
                        <td>timothy@example.com</td>
                        <td>+1-083-642-4673</td>
                        <td>Italy <span className="text-hide">Code: IT</span></td>
                        <td>
                          <span className="legend-indicator bg-success" />Active
                        </td>
                        <td>9</td>
                        <td>$2,238.29</td>
                        <td>Aug 16, 2020, 1:15 (ET)</td>
                      </tr>
                      <tr>
                        <td className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="usersDataCheck21" />
                            <label className="custom-control-label" htmlFor="usersDataCheck21" />
                          </div>
                        </td>
                        <td className="table-column-pl-0">
                          <a className="d-flex align-items-center" href="ecommerce-customer-details.html">
                            <div className="avatar avatar-soft-dark avatar-circle">
                              <span className="avatar-initials">G</span>
                            </div>
                            <div className="ml-3">
                              <span className="h5 text-hover-primary">Gary Bishop <i className="tio-verified text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed" /></span>
                            </div>
                          </a>
                        </td>
                        <td>gary@example.com</td>
                        <td>+1-325-547-5683</td>
                        <td>Latvia <span className="text-hide">Code: LV</span></td>
                        <td>
                          <span className="legend-indicator bg-success" />Active
                        </td>
                        <td>6 <span className="badge badge-soft-dark ml-1">+1 today</span></td>
                        <td>$2,120.29</td>
                        <td>Aug 16, 2020, 1:15 (ET)</td>
                      </tr>
                      <tr>
                        <td className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="usersDataCheck22" />
                            <label className="custom-control-label" htmlFor="usersDataCheck22" />
                          </div>
                        </td>
                        <td className="table-column-pl-0">
                          <a className="d-flex align-items-center" href="ecommerce-customer-details.html">
                            <div className="avatar avatar-soft-dark avatar-circle">
                              <span className="avatar-initials">Y</span>
                            </div>
                            <div className="ml-3">
                              <span className="h5 text-hover-primary">Yorker Scogings</span>
                            </div>
                          </a>
                        </td>
                        <td>yorker@example.com</td>
                        <td>+1-954-236-3235</td>
                        <td>Norway <span className="text-hide">Code: NO</span></td>
                        <td>
                          <span className="legend-indicator bg-success" />Active
                        </td>
                        <td>3</td>
                        <td>$882.00</td>
                        <td>Aug 16, 2020, 1:15 (ET)</td>
                      </tr>
                      <tr>
                        <td className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="usersDataCheck23" />
                            <label className="custom-control-label" htmlFor="usersDataCheck23" />
                          </div>
                        </td>
                        <td className="table-column-pl-0">
                          <a className="d-flex align-items-center" href="ecommerce-customer-details.html">
                            <div className="avatar avatar-soft-info avatar-circle">
                              <span className="avatar-initials">F</span>
                            </div>
                            <div className="ml-3">
                              <span className="h5 text-hover-primary">Frank Phillips</span>
                            </div>
                          </a>
                        </td>
                        <td>frank@example.com</td>
                        <td>+1-253-574-3422</td>
                        <td>Norway <span className="text-hide">Code: NO</span></td>
                        <td>
                          <span className="legend-indicator bg-success" />Active
                        </td>
                        <td>1</td>
                        <td>$92.00</td>
                        <td>Aug 16, 2020, 1:15 (ET)</td>
                      </tr>
                      <tr>
                        <td className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="usersDataCheck24" />
                            <label className="custom-control-label" htmlFor="usersDataCheck24" />
                          </div>
                        </td>
                        <td className="table-column-pl-0">
                          <a className="d-flex align-items-center" href="ecommerce-customer-details.html">
                            <div className="avatar avatar-soft-primary avatar-circle">
                              <span className="avatar-initials">E</span>
                            </div>
                            <div className="ml-3">
                              <span className="h5 text-hover-primary">Elizabeth Carter</span>
                            </div>
                          </a>
                        </td>
                        <td>eliz@example.com</td>
                        <td>+1-800-724-3303</td>
                        <td>United States <span className="text-hide">Code: UK</span></td>
                        <td>
                          <span className="legend-indicator bg-success" />Active
                        </td>
                        <td>2</td>
                        <td>$50.00</td>
                        <td>Aug 16, 2020, 1:15 (ET)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* End Table */}
                {/* Footer */}
                <div className="card-footer">
                  {/* Pagination */}
                  <div className="row justify-content-center justify-content-sm-between align-items-sm-center">
                    <div className="col-sm mb-2 mb-sm-0">
                      <div className="d-flex justify-content-center justify-content-sm-start align-items-center">
                        <span className="mr-2">Hiển thị</span>
                        {/* Select */}
                        <select id="datatableEntries" className="js-select2-custom" data-hs-select2-options="{
                                &quot;minimumResultsForSearch&quot;: &quot;Infinity&quot;,
                                &quot;customClass&quot;: &quot;custom-select custom-select-sm custom-select-borderless&quot;,
                                &quot;dropdownAutoWidth&quot;: true,
                                &quot;width&quot;: true
                              }">
                          <option value={10}>10</option>
                          <option value={15} selected>15</option>
                          <option value={20}>20</option>
                        </select>
                        {/* End Select */}
                        <span className="text-secondary mr-2"> khách hàng trong tổng</span>
                        {/* Pagination Quantity */}
                        <span id="datatableWithPaginationInfoTotalQty" />
                      </div>
                    </div>
                    <div className="col-sm-auto">
                      <div className="d-flex justify-content-center justify-content-sm-end">
                        {/* Pagination */}
                        <nav id="datatablePagination" aria-label="Activity pagination" />
                      </div>
                    </div>
                  </div>
                  {/* End Pagination */}
                </div>
                {/* End Footer */}
              </div>
              {/* End Card */}
            </div>
            {/* End Content */}
          </main>
        );
      }

export default ListUser;