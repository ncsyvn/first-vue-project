<template>
    <div>
        <h1>Tên giáo viên static: {{ten_giao_vien_static}}</h1>
        <h1> Tên giáo viên dynamic: {{ten_giao_vien_dynamic}}</h1>
    </div>
</template>

<script>
export default {
    name: 'thongTinGiaoVien',
    props: ['ten_giao_vien_static', 'ten_giao_vien_dynamic'],
    data: function(){
        return {
            a: 1
        };
    }
};
</script>