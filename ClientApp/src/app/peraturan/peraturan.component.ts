import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peraturan',
  templateUrl: './peraturan.component.html',
  styleUrls: ['./peraturan.component.css']
})
export class PeraturanComponent implements OnInit {

  public peraturan = [
    {
      "judul" : "Peraturan Menteri Keuangan Republik Indonesia Nomor 260/PMK.08/2016",
      "isi" : "Tata Cara Pembayaran Ketersediaan Layanan Pada Proyek Menimbang Mengingat Kerja Sama Pemerintah Dengan Badan Usaha Dalam Rangka Penyediaan Infrastruktur",
      "tag" : ["Peraturan Menteri", "Kementrian Keuangan", "260/PMK.08/2016", "2016"],
      "url" : "assets/contoh_dokumen.pdf"
    },
    {
      "judul" : "Peraturan Kepala Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah Nomor 19 Tahun 2015",
      "isi" : "Tata Cara Pembayaran Ketersediaan Layanan Pada Proyek Menimbang Mengingat Kerja Sama Pemerintah Dengan Badan Usaha Dalam Rangka Penyediaan Infrastruktur",
      "tag" : ["Peraturan Lembaga", "Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah", "19", "2015"],
      "url" : "assets/contoh_dokumen.pdf"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
